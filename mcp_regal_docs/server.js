'use strict';

/**
 * MCP server: developer docs + Knowledge Hub + API reference (regal_docs_md, regal_support_md, regal_reference_md).
 *
 * {
 *   "mcpServers": {
 *     "regal-knowledge": {
 *       "command": "node",
 *       "args": ["/absolute/path/to/regal/mcp_regal_docs/server.js"],
 *       "env": {
 *         "REGAL_DOCS_MD_DIR": "/optional/override/regal_docs_md",
 *         "REGAL_SUPPORT_MD_DIR": "/optional/override/regal_support_md",
 *         "REGAL_REFERENCE_MD_DIR": "/optional/override/regal_reference_md"
 *       }
 *     }
 *   }
 * }
 *
 * Defaults: ../regal_docs_md, ../regal_support_md, ../regal_reference_md (siblings of mcp_regal_docs).
 */

const fs = require('fs');
const path = require('path');
const { McpServer, ResourceTemplate } = require('@modelcontextprotocol/sdk/server/mcp.js');
const { StdioServerTransport } = require('@modelcontextprotocol/sdk/server/stdio.js');
const z = require('zod/v4');

function resolveDocsDir() {
  const env = process.env.REGAL_DOCS_MD_DIR;
  if (env) return path.resolve(env);
  return path.resolve(__dirname, '..', 'regal_docs_md');
}

function listSlugs(docsDir) {
  if (!fs.existsSync(docsDir)) return [];
  return fs
    .readdirSync(docsDir)
    .filter((f) => f.endsWith('.md') && !f.startsWith('_'))
    .map((f) => f.replace(/\.md$/, ''))
    .sort();
}

function readTitle(content) {
  const m = content.match(/^#\s+(.+)$/m);
  return m ? m[1].trim() : '';
}

function getDocPath(docsDir, slug) {
  if (!/^[a-z0-9-]+$/.test(slug)) return null;
  const p = path.join(docsDir, `${slug}.md`);
  return fs.existsSync(p) ? p : null;
}

function resolveSupportDir() {
  const env = process.env.REGAL_SUPPORT_MD_DIR;
  if (env) return path.resolve(env);
  return path.resolve(__dirname, '..', 'regal_support_md');
}

function listSupportSlugs(supportDir) {
  if (!fs.existsSync(supportDir)) return [];
  return fs
    .readdirSync(supportDir)
    .filter((f) => f.endsWith('.md') && !f.startsWith('_'))
    .map((f) => f.replace(/\.md$/, ''))
    .sort();
}

function getSupportArticlePath(supportDir, slug) {
  if (!/^[a-zA-Z0-9-]+$/.test(slug)) return null;
  const p = path.join(supportDir, `${slug}.md`);
  return fs.existsSync(p) ? p : null;
}

function resolveReferenceDir() {
  const env = process.env.REGAL_REFERENCE_MD_DIR;
  if (env) return path.resolve(env);
  return path.resolve(__dirname, '..', 'regal_reference_md');
}

function listReferenceSlugs(referenceDir) {
  if (!fs.existsSync(referenceDir)) return [];
  return fs
    .readdirSync(referenceDir)
    .filter((f) => f.endsWith('.md') && !f.startsWith('_'))
    .map((f) => f.replace(/\.md$/, ''))
    .sort();
}

function getReferencePath(referenceDir, slug) {
  if (!/^[a-z0-9-]+$/.test(slug)) return null;
  const p = path.join(referenceDir, `${slug}.md`);
  return fs.existsSync(p) ? p : null;
}

function toolError(message) {
  return {
    content: [{ type: 'text', text: message }],
    isError: true,
  };
}

/** Shown to MCP clients on initialize (server instructions). */
const SERVER_INSTRUCTIONS = [
  'Before answering any question about Regal (product, docs, API, or support), call at least one of:',
  'search_regal_docs, search_regal_support, search_regal_reference — with queries likely to appear in the mirrored markdown.',
  'Only state facts, steps, and URLs that appear in tool results or in full pages you load afterward (get_regal_* or resources/read).',
  "If no relevant content is found, reply exactly: not found.",
].join(' ');

async function main() {
  const docsDir = resolveDocsDir();
  const supportDir = resolveSupportDir();
  const referenceDir = resolveReferenceDir();
  const mcp = new McpServer(
    { name: 'regal-knowledge', version: '1.2.1' },
    { instructions: SERVER_INSTRUCTIONS },
  );

  const docTemplate = new ResourceTemplate('regal-docs://docs/{slug}', {
    list: async () => {
      const slugs = listSlugs(docsDir);
      const resources = slugs.map((slug) => {
        let title = slug;
        try {
          const content = fs.readFileSync(path.join(docsDir, `${slug}.md`), 'utf8');
          title = readTitle(content) || slug;
        } catch {
          /* ignore */
        }
        return {
          uri: `regal-docs://docs/${slug}`,
          name: slug,
          title,
          mimeType: 'text/markdown',
        };
      });
      return { resources };
    },
    complete: {
      slug: async (value) => {
        const v = (value || '').toLowerCase();
        const slugs = listSlugs(docsDir);
        const matched = slugs.filter((s) => s.startsWith(v) || s.includes(v));
        return matched.slice(0, 50);
      },
    },
  });

  mcp.registerResource(
    'regal-doc',
    docTemplate,
    {
      title: 'Regal developer documentation page',
      description: 'Markdown mirror of a single page from developer.regal.ai/docs',
    },
    async (uri, variables) => {
      const slug = variables.slug;
      const filePath = getDocPath(docsDir, slug);
      if (!filePath) {
        return {
          contents: [
            {
              uri: uri.href,
              mimeType: 'text/plain',
              text: `Unknown doc slug: ${slug}. Use list_regal_docs or resources/list.`,
            },
          ],
        };
      }
      const text = fs.readFileSync(filePath, 'utf8');
      return {
        contents: [{ uri: uri.href, mimeType: 'text/markdown', text }],
      };
    },
  );

  mcp.registerTool(
    'list_regal_docs',
    {
      description:
        'List all pages in the local Regal docs mirror (developer.regal.ai/docs). Returns slug, title, and regal-docs:// URI for use with resources/read.',
    },
    async () => {
      const slugs = listSlugs(docsDir);
      if (slugs.length === 0) {
        return {
          content: [
            {
              type: 'text',
              text: `No .md files found in ${docsDir}. Run scrape_regal_docs.py or set REGAL_DOCS_MD_DIR.`,
            },
          ],
        };
      }
      const lines = slugs.map((slug) => {
        let title = slug;
        try {
          const content = fs.readFileSync(path.join(docsDir, `${slug}.md`), 'utf8');
          title = readTitle(content) || slug;
        } catch {
          /* ignore */
        }
        return `- **${slug}** — ${title} → \`regal-docs://docs/${slug}\``;
      });
      const header = `Directory: ${docsDir}\nPages: ${slugs.length}\n\n`;
      return { content: [{ type: 'text', text: header + lines.join('\n') }] };
    },
  );

  mcp.registerTool(
    'get_regal_doc',
    {
      description: 'Load the full markdown body for one doc by slug (filename without .md).',
      inputSchema: {
        slug: z.string().describe('Doc slug, e.g. deploy-sms-agent or what-is-regal'),
      },
    },
    async ({ slug }) => {
      const filePath = getDocPath(docsDir, slug);
      if (!filePath) {
        return toolError(`No doc found for slug "${slug}" under ${docsDir}`);
      }
      const text = fs.readFileSync(filePath, 'utf8');
      return { content: [{ type: 'text', text }] };
    },
  );

  mcp.registerTool(
    'search_regal_docs',
    {
      description:
        'Case-insensitive substring search across all mirrored Regal docs. Returns slugs with short excerpts.',
      inputSchema: {
        query: z.string().min(1).describe('Text to find in doc bodies'),
        limit: z
          .number()
          .int()
          .min(1)
          .max(50)
          .optional()
          .describe('Max number of results (default 20)'),
      },
    },
    async ({ query, limit }) => {
      const max = limit != null ? limit : 20;
      const q = query.toLowerCase();
      const slugs = listSlugs(docsDir);
      const hits = [];
      for (const slug of slugs) {
        if (hits.length >= max) break;
        const content = fs.readFileSync(path.join(docsDir, `${slug}.md`), 'utf8');
        const lower = content.toLowerCase();
        const idx = lower.indexOf(q);
        if (idx === -1) continue;
        const start = Math.max(0, idx - 120);
        const end = Math.min(content.length, idx + query.length + 200);
        let excerpt = content.slice(start, end).replace(/\s+/g, ' ');
        if (start > 0) excerpt = '…' + excerpt;
        if (end < content.length) excerpt += '…';
        hits.push(`### ${slug}\n${excerpt}\n`);
      }
      if (hits.length === 0) {
        return { content: [{ type: 'text', text: `No matches for "${query}".` }] };
      }
      return { content: [{ type: 'text', text: hits.join('\n') }] };
    },
  );

  const supportTemplate = new ResourceTemplate('regal-support://articles/{slug}', {
    list: async () => {
      const slugs = listSupportSlugs(supportDir);
      const resources = slugs.map((slug) => {
        let title = slug;
        try {
          const content = fs.readFileSync(path.join(supportDir, `${slug}.md`), 'utf8');
          title = readTitle(content) || slug;
        } catch {
          /* ignore */
        }
        return {
          uri: `regal-support://articles/${slug}`,
          name: slug,
          title,
          mimeType: 'text/markdown',
        };
      });
      return { resources };
    },
    complete: {
      slug: async (value) => {
        const v = (value || '').toLowerCase();
        const slugs = listSupportSlugs(supportDir);
        const matched = slugs.filter((s) => s.toLowerCase().startsWith(v) || s.toLowerCase().includes(v));
        return matched.slice(0, 50);
      },
    },
  });

  mcp.registerResource(
    'regal-support-article',
    supportTemplate,
    {
      title: 'Regal Knowledge Hub article',
      description: 'Markdown mirror of a support.regal.ai Help Center article',
    },
    async (uri, variables) => {
      const slug = variables.slug;
      const filePath = getSupportArticlePath(supportDir, slug);
      if (!filePath) {
        return {
          contents: [
            {
              uri: uri.href,
              mimeType: 'text/plain',
              text: `Unknown article slug: ${slug}. Use list_regal_support or resources/list.`,
            },
          ],
        };
      }
      const text = fs.readFileSync(filePath, 'utf8');
      return {
        contents: [{ uri: uri.href, mimeType: 'text/markdown', text }],
      };
    },
  );

  mcp.registerTool(
    'list_regal_support',
    {
      description:
        'List all Knowledge Hub articles (support.regal.ai). Returns slug stem, title, and regal-support:// URI.',
    },
    async () => {
      const slugs = listSupportSlugs(supportDir);
      if (slugs.length === 0) {
        return {
          content: [
            {
              type: 'text',
              text: `No support .md files in ${supportDir}. Run scrape_regal_support.py or set REGAL_SUPPORT_MD_DIR.`,
            },
          ],
        };
      }
      const lines = slugs.map((slug) => {
        let title = slug;
        try {
          const content = fs.readFileSync(path.join(supportDir, `${slug}.md`), 'utf8');
          title = readTitle(content) || slug;
        } catch {
          /* ignore */
        }
        return `- **${slug}** — ${title} → \`regal-support://articles/${slug}\``;
      });
      const header = `Directory: ${supportDir}\nArticles: ${slugs.length}\n\n`;
      return { content: [{ type: 'text', text: header + lines.join('\n') }] };
    },
  );

  mcp.registerTool(
    'get_regal_support',
    {
      description:
        'Load full markdown for one Help Center article. Slug is the filename without .md (e.g. 35711384384411-Getting-Started-with-AI-Agents).',
      inputSchema: {
        slug: z.string().describe('Article file stem (id-Title-From-Url)'),
      },
    },
    async ({ slug }) => {
      const filePath = getSupportArticlePath(supportDir, slug);
      if (!filePath) {
        return toolError(`No article found for slug "${slug}" under ${supportDir}`);
      }
      const text = fs.readFileSync(filePath, 'utf8');
      return { content: [{ type: 'text', text }] };
    },
  );

  mcp.registerTool(
    'search_regal_support',
    {
      description: 'Case-insensitive search across mirrored Knowledge Hub articles; returns slugs with excerpts.',
      inputSchema: {
        query: z.string().min(1).describe('Text to find'),
        limit: z
          .number()
          .int()
          .min(1)
          .max(50)
          .optional()
          .describe('Max results (default 20)'),
      },
    },
    async ({ query, limit }) => {
      const max = limit != null ? limit : 20;
      const q = query.toLowerCase();
      const slugs = listSupportSlugs(supportDir);
      const hits = [];
      for (const slug of slugs) {
        if (hits.length >= max) break;
        const content = fs.readFileSync(path.join(supportDir, `${slug}.md`), 'utf8');
        const lower = content.toLowerCase();
        const idx = lower.indexOf(q);
        if (idx === -1) continue;
        const start = Math.max(0, idx - 120);
        const end = Math.min(content.length, idx + query.length + 200);
        let excerpt = content.slice(start, end).replace(/\s+/g, ' ');
        if (start > 0) excerpt = '…' + excerpt;
        if (end < content.length) excerpt += '…';
        hits.push(`### ${slug}\n${excerpt}\n`);
      }
      if (hits.length === 0) {
        return { content: [{ type: 'text', text: `No matches for "${query}".` }] };
      }
      return { content: [{ type: 'text', text: hits.join('\n') }] };
    },
  );

  const referenceTemplate = new ResourceTemplate('regal-reference://reference/{slug}', {
    list: async () => {
      const slugs = listReferenceSlugs(referenceDir);
      const resources = slugs.map((slug) => {
        let title = slug;
        try {
          const content = fs.readFileSync(path.join(referenceDir, `${slug}.md`), 'utf8');
          title = readTitle(content) || slug;
        } catch {
          /* ignore */
        }
        return {
          uri: `regal-reference://reference/${slug}`,
          name: slug,
          title,
          mimeType: 'text/markdown',
        };
      });
      return { resources };
    },
    complete: {
      slug: async (value) => {
        const v = (value || '').toLowerCase();
        const slugs = listReferenceSlugs(referenceDir);
        const matched = slugs.filter((s) => s.startsWith(v) || s.includes(v));
        return matched.slice(0, 50);
      },
    },
  });

  mcp.registerResource(
    'regal-api-reference',
    referenceTemplate,
    {
      title: 'Regal API reference page',
      description: 'Markdown mirror of developer.regal.ai/reference (REST / events API)',
    },
    async (uri, variables) => {
      const slug = variables.slug;
      const filePath = getReferencePath(referenceDir, slug);
      if (!filePath) {
        return {
          contents: [
            {
              uri: uri.href,
              mimeType: 'text/plain',
              text: `Unknown reference slug: ${slug}. Use list_regal_reference or resources/list.`,
            },
          ],
        };
      }
      const text = fs.readFileSync(filePath, 'utf8');
      return {
        contents: [{ uri: uri.href, mimeType: 'text/markdown', text }],
      };
    },
  );

  mcp.registerTool(
    'list_regal_reference',
    {
      description:
        'List API reference pages (developer.regal.ai/reference). Use for cURL, endpoints, Post Custom Event, Send Message, campaigns, dispositions, branded numbers, etc.',
    },
    async () => {
      const slugs = listReferenceSlugs(referenceDir);
      if (slugs.length === 0) {
        return {
          content: [
            {
              type: 'text',
              text: `No reference .md files in ${referenceDir}. Run scrape_regal_reference.py or set REGAL_REFERENCE_MD_DIR.`,
            },
          ],
        };
      }
      const lines = slugs.map((slug) => {
        let title = slug;
        try {
          const content = fs.readFileSync(path.join(referenceDir, `${slug}.md`), 'utf8');
          title = readTitle(content) || slug;
        } catch {
          /* ignore */
        }
        return `- **${slug}** — ${title} → \`regal-reference://reference/${slug}\``;
      });
      const header = `Directory: ${referenceDir}\nPages: ${slugs.length}\nHub: https://developer.regal.ai/reference/api\n\n`;
      return { content: [{ type: 'text', text: header + lines.join('\n') }] };
    },
  );

  mcp.registerTool(
    'get_regal_reference',
    {
      description:
        'Load full markdown for one API reference page by slug (filename without .md), e.g. api, send-message, overview.',
      inputSchema: {
        slug: z.string().describe('Reference slug from list_regal_reference'),
      },
    },
    async ({ slug }) => {
      const filePath = getReferencePath(referenceDir, slug);
      if (!filePath) {
        return toolError(`No reference page found for slug "${slug}" under ${referenceDir}`);
      }
      const text = fs.readFileSync(filePath, 'utf8');
      return { content: [{ type: 'text', text }] };
    },
  );

  mcp.registerTool(
    'search_regal_reference',
    {
      description: 'Search across mirrored API reference pages (endpoints, parameters, examples).',
      inputSchema: {
        query: z.string().min(1).describe('Text to find'),
        limit: z
          .number()
          .int()
          .min(1)
          .max(50)
          .optional()
          .describe('Max results (default 20)'),
      },
    },
    async ({ query, limit }) => {
      const max = limit != null ? limit : 20;
      const q = query.toLowerCase();
      const slugs = listReferenceSlugs(referenceDir);
      const hits = [];
      for (const slug of slugs) {
        if (hits.length >= max) break;
        const content = fs.readFileSync(path.join(referenceDir, `${slug}.md`), 'utf8');
        const lower = content.toLowerCase();
        const idx = lower.indexOf(q);
        if (idx === -1) continue;
        const start = Math.max(0, idx - 120);
        const end = Math.min(content.length, idx + query.length + 200);
        let excerpt = content.slice(start, end).replace(/\s+/g, ' ');
        if (start > 0) excerpt = '…' + excerpt;
        if (end < content.length) excerpt += '…';
        hits.push(`### ${slug}\n${excerpt}\n`);
      }
      if (hits.length === 0) {
        return { content: [{ type: 'text', text: `No matches for "${query}".` }] };
      }
      return { content: [{ type: 'text', text: hits.join('\n') }] };
    },
  );

  const transport = new StdioServerTransport();
  await mcp.connect(transport);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
