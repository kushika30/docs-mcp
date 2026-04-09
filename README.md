# Regal Knowledge MCP server

The **Regal Knowledge** MCP server (see **`mcp_regal_docs/server.js`**) exposes **three** local mirrors of Regal content as **resources** and **tools** so Cursor, Claude Code, Codex, or other MCP clients can search and read them **without calling the live websites at runtime**.

### What’s included (summary)

| Mirror | Source | Local folder | Use for |
|--------|--------|----------------|--------|
| Developer docs | [developer.regal.ai/docs](https://developer.regal.ai/docs/) | `regal_docs_md/` | Product how-tos, integrations, AI agent setup |
| **API reference** | [developer.regal.ai/reference/api](https://developer.regal.ai/reference/api) | `regal_reference_md/` | REST/events endpoints, bodies, headers (e.g. Post Custom Event, Send Message, lists) |
| Knowledge Hub | [support.regal.ai](https://support.regal.ai/hc/en-us) | `regal_support_md/` | Journeys, campaigns, agent desktop, ops guides |

Scrape scripts live in the repo root; the MCP only reads the generated `.md` files.

---

## Project files

| Path | Role |
|------|------|
| **`README.md`** | Root documentation: MCP behavior, scraping, and client setup (Cursor, Claude Code, Codex, etc.). |
| **`.gitignore`** | Keeps `.venv/`, `mcp_regal_docs/node_modules/`, Python caches, and local env files out of version control. |
| **`mcp_regal_docs/`** | The MCP server package: `server.js` (stdio MCP process), `package.json` / `package-lock.json` (Node deps: SDK + Zod), and **`mcp_regal_docs/README.md`** (focused server + install notes). Run `npm install` inside this folder. |
| **`regal_docs_md/`** | Scraped **developer docs** (one `.md` per page from [developer.regal.ai/docs](https://developer.regal.ai/docs/)). Filenames are URL slugs (e.g. `deploy-sms-agent.md`). `_manifest.json` records scrape metadata. |
| **`regal_reference_md/`** | Scraped **API reference** (REST/events pages from [developer.regal.ai/reference](https://developer.regal.ai/reference/api)). Same pattern: slug filenames + `_manifest.json`. |
| **`regal_support_md/`** | Scraped **Knowledge Hub** articles from [support.regal.ai](https://support.regal.ai/hc/en-us); stems look like `{id}-{Title-From-Url}.md` plus `_manifest.json`. |
| **`scrape_regal_docs.py`** | Python script (run from repo root with a venv that has `markdownify`) to refresh `regal_docs_md/`. |
| **`scrape_regal_reference.py`** | Same for `regal_reference_md/`. |
| **`scrape_regal_support.py`** | Same for `regal_support_md/` via the public Help Center API. |

The three `*_md/` trees are **data** for the server; the MCP does not scrape at runtime—it only reads these files. Re-run the scrape scripts when you want newer content from the live sites.

---

## What it does (walkthrough)

1. **On startup** the MCP client launches `node server.js` with **stdio** transport (stdin/stdout JSON-RPC). You do **not** keep a terminal open with `npm start` for normal IDE use—that would occupy the same stdio channel the client needs.

2. **It reads Markdown from disk** (no network at runtime):
   - **Developer documentation** — mirror of [developer.regal.ai/docs](https://developer.regal.ai/docs/) (`regal_docs_md/` by default).
   - **API reference** — mirror of [developer.regal.ai/reference](https://developer.regal.ai/reference/api) (Post Custom Event, Send Message, list endpoints, branding APIs, etc.; `regal_reference_md/` by default).
   - **Knowledge Hub** — mirror of [support.regal.ai](https://support.regal.ai/hc/en-us) Help Center articles (`regal_support_md/` by default).

3. **Resources** (for clients that fetch context by URI):
   - `regal-docs://docs/{slug}` — one dev doc; `{slug}` is the filename without `.md` (e.g. `deploy-sms-agent`).
   - `regal-reference://reference/{slug}` — one API reference page (e.g. `api`, `send-message`, `overview`).
   - `regal-support://articles/{slug}` — one support article; `{slug}` is the file stem (e.g. `35711384384411-Getting-Started-with-AI-Agents`).

4. **Tools** (for the model to call explicitly):

   | Tool | Purpose |
   |------|--------|
   | `list_regal_docs` | Lists all dev doc slugs, titles, and `regal-docs://` URIs. |
   | `get_regal_doc` | Returns full Markdown for a dev doc slug. |
   | `search_regal_docs` | Substring search across dev docs; returns excerpts. |
   | `list_regal_reference` | Lists API reference slugs (hub: `reference/api`) and `regal-reference://` URIs. |
   | `get_regal_reference` | Returns full Markdown for a reference slug (e.g. `api`). |
   | `search_regal_reference` | Substring search across API reference pages. |
   | `list_regal_support` | Lists support article stems, titles, and `regal-support://` URIs. |
   | `get_regal_support` | Returns full Markdown for a support article stem. |
   | `search_regal_support` | Substring search across support articles; returns excerpts. |

5. **Server identity** in the MCP handshake: name `regal-knowledge`, version `1.2.1` (see `server.js`). **Server instructions** (sent on initialize): call at least one `search_regal_*` tool before answering Regal questions; answer only from retrieved content; if nothing applies, say exactly **not found.**

---

## Prerequisites

- **Node.js 18+** (matches `@modelcontextprotocol/sdk` engines).
- **Markdown files on disk** under the expected folders (see below). If a folder is missing or empty, listing/search tools still run but return “no files” messages for that corpus.

---

## How to install dependencies

From this directory:

```bash
cd mcp_regal_docs
npm install
```

This installs `@modelcontextprotocol/sdk` and `zod`. Commit `package-lock.json` if you want reproducible installs.

---

## How to populate the Markdown mirrors

From the **parent** repo root (`regal/`), using the Python venv that has `markdownify`:

```bash
cd /path/to/regal
.venv/bin/python scrape_regal_docs.py       # → regal_docs_md/
.venv/bin/python scrape_regal_reference.py  # → regal_reference_md/ (API reference)
.venv/bin/python scrape_regal_support.py    # → regal_support_md/
```

If `.venv` does not exist yet:

```bash
python3 -m venv .venv
.venv/bin/pip install beautifulsoup4 markdownify lxml
```

### You do not need to scrape every time

The MCP server only **reads the saved `.md` files** on disk. It does **not** hit Regal’s websites when you use Cursor or another client.

- **Normal use:** scrape once (or whenever you clone the repo without those folders). After the three `*_md/` folders exist, just use the MCP—no scrape step per session.
- **Re-scrape when:** you want **updated** copy from the live docs, [API reference](https://developer.regal.ai/reference/api), or Knowledge Hub, you’re on a **new machine** without the mirrors, or the folders were **deleted**.

---

## Step-by-step: connect the MCP server

Do **Step 0** once per machine. Then follow the subsection for **Cursor**, **Claude Code**, or **OpenAI Codex** (and optionally **Claude Desktop**).

### Step 0 — Prepare the server and data (everyone)

1. **Clone or copy** this repo so you have `mcp_regal_docs/server.js` and the scrape scripts.
2. **Install Node dependencies** for the MCP server:
   ```bash
   cd /path/to/regal/mcp_regal_docs
   npm install
   ```
3. **Generate the Markdown mirrors** (Python venv with `markdownify`; from repo root):
   ```bash
   cd /path/to/regal
   .venv/bin/python scrape_regal_docs.py
   .venv/bin/python scrape_regal_reference.py
   .venv/bin/python scrape_regal_support.py
   ```
4. **Get the absolute path** to the server (use this in every client below):
   ```bash
   realpath /path/to/regal/mcp_regal_docs/server.js
   ```
   Example: `/Users/you/Desktop/regal/mcp_regal_docs/server.js`

5. **Optional — custom mirror paths:** if `regal_docs_md`, `regal_reference_md`, or `regal_support_md` are not next to `mcp_regal_docs/`, each client below supports setting `REGAL_DOCS_MD_DIR`, `REGAL_REFERENCE_MD_DIR`, and `REGAL_SUPPORT_MD_DIR` (see examples).

---

### Cursor

1. Open **Cursor** → **Settings** (gear) → search for **MCP**, or use **Cursor → Settings → Cursor Settings → MCP** (labels vary by version).
2. Open the **MCP configuration** editor (e.g. “Edit in settings.json” / “Add new global MCP server”).
3. Ensure your config defines **`mcpServers`** with this server (replace the path with your `realpath` output):

```json
{
  "mcpServers": {
    "regal-knowledge": {
      "command": "node",
      "args": ["/Users/YOU/Desktop/regal/mcp_regal_docs/server.js"]
    }
  }
}
```

4. If your build supports **`${workspaceFolder}`**, you can use it inside `args` so the path tracks the opened project, e.g. `"args": ["${workspaceFolder}/mcp_regal_docs/server.js"]`.
5. **Save** the file. **Reload MCP** (button in MCP UI) or **restart Cursor**.
6. Open the **MCP** panel and confirm **`regal-knowledge`** is connected (no errors). In Agent chat, the model should have **nine** Regal tools (`list_regal_docs`, `get_regal_reference`, etc.).

**Config file location (typical):** macOS/Linux `~/.cursor/mcp.json`; Windows `%USERPROFILE%\.cursor\mcp.json`. Some setups use a project-level `.cursor/mcp.json` — prefer the path your Settings UI shows.

**Optional `env` block** (non-default mirror locations):

```json
"regal-knowledge": {
  "command": "node",
  "args": ["/Users/YOU/Desktop/regal/mcp_regal_docs/server.js"],
  "env": {
    "REGAL_DOCS_MD_DIR": "/absolute/path/to/regal_docs_md",
    "REGAL_REFERENCE_MD_DIR": "/absolute/path/to/regal_reference_md",
    "REGAL_SUPPORT_MD_DIR": "/absolute/path/to/regal_support_md"
  }
}
```

---

### Claude Code

Uses a **stdio** MCP process. Official MCP docs: [Connect Claude Code to tools via MCP](https://docs.anthropic.com/en/docs/claude-code/mcp).

1. Complete **Step 0** above.
2. In a terminal, add the server (options **before** the name; **`--`** separates the command that starts the server):

```bash
claude mcp add --transport stdio regal-knowledge -- node /ABSOLUTE/PATH/TO/mcp_regal_docs/server.js
```

3. **Optional environment variables** (repeat `--env` for each):

```bash
claude mcp add --transport stdio \
  --env REGAL_REFERENCE_MD_DIR=/custom/path/regal_reference_md \
  regal-knowledge -- node /ABSOLUTE/PATH/TO/mcp_regal_docs/server.js
```

4. Verify: `claude mcp list` should show `regal-knowledge`.
5. Inside Claude Code, run **`/mcp`** to see connection status. Use **`/doctor`** if something fails to start.

---

### OpenAI Codex (CLI and IDE extension)

Codex shares MCP config between the **CLI** and **IDE extension**. Official overview: [Model Context Protocol (Codex)](https://developers.openai.com/codex/mcp).

**Option A — CLI**

1. Complete **Step 0** above.
2. Run:

```bash
codex mcp add regal-knowledge -- node /ABSOLUTE/PATH/TO/mcp_regal_docs/server.js
```

3. Optional env vars:

```bash
codex mcp add regal-knowledge \
  --env REGAL_DOCS_MD_DIR=/custom/regal_docs_md \
  -- node /ABSOLUTE/PATH/TO/mcp_regal_docs/server.js
```

4. Check: `codex mcp list`. In the Codex TUI, **`/mcp`** lists active servers.

**Option B — `config.toml`**

Edit **`~/.codex/config.toml`** (global) or **`.codex/config.toml`** in a **trusted** project ([Codex config](https://developers.openai.com/codex/config-basic)):

```toml
[mcp_servers.regal-knowledge]
command = "node"
args = ["/ABSOLUTE/PATH/TO/mcp_regal_docs/server.js"]

# Optional:
# [mcp_servers.regal-knowledge.env]
# REGAL_REFERENCE_MD_DIR = "/custom/path/regal_reference_md"
```

Restart Codex / reload so the server is picked up.

---

### Claude Desktop (optional)

If you use the **Claude desktop app** (separate from Claude Code), MCP is configured in **`claude_desktop_config.json`**.

- **macOS:** `~/Library/Application Support/Claude/claude_desktop_config.json`  
- **Windows:** `%APPDATA%\Claude\claude_desktop_config.json`

Example:

```json
{
  "mcpServers": {
    "regal-knowledge": {
      "command": "node",
      "args": ["/ABSOLUTE/PATH/TO/mcp_regal_docs/server.js"]
    }
  }
}
```

Restart Claude Desktop after saving.

---

## Do not log to stdout

MCP uses **stdout** for the protocol. This server avoids `console.log` on stdout. If you fork it, keep diagnostics on **stderr** only.

---

## Manual sanity check (optional)

To verify the script and corpora outside Cursor:

```bash
cd mcp_regal_docs
npx @modelcontextprotocol/inspector node server.js
```

Use the Inspector UI to list tools/resources and call a tool. If that works but Cursor does not, fix **paths** in MCP config and reload.

---

## Troubleshooting

| Symptom | What to check |
|--------|----------------|
| “No .md files” for dev docs | Run `scrape_regal_docs.py`; confirm `REGAL_DOCS_MD_DIR` or default `../regal_docs_md`. |
| “No support .md files” | Run `scrape_regal_support.py`; confirm `REGAL_SUPPORT_MD_DIR` or default `../regal_support_md`. |
| “No reference .md files” | Run `scrape_regal_reference.py`; confirm `REGAL_REFERENCE_MD_DIR` or default `../regal_reference_md`. |
| `get_regal_support` fails for a slug | Slug must match the filename **without** `.md` (includes digits and mixed case, e.g. `17399564541467-Creating-a-Basic-Calendly-Call-Scheduled-Journey`). |
| Module not found | Run `npm install` inside `mcp_regal_docs`. |
| Cursor never connects | Use absolute `args` path; ensure Node is on PATH for GUI apps (macOS sometimes needs a login shell PATH or full path to `node`). |
| Claude Code / Codex can’t start server | Use **`--transport stdio`** for Claude Code; confirm `node` and `server.js` paths with `which node` and `realpath`. Re-run `claude mcp list` or `codex mcp list`. |

---

## Repo layout (default)

```text
regal/
  mcp_regal_docs/         ← MCP server (server.js, package.json, node_modules)
  regal_docs_md/          ← developer docs mirror
  regal_reference_md/     ← API reference mirror (developer.regal.ai/reference)
  regal_support_md/       ← Knowledge Hub mirror
  scrape_regal_docs.py
  scrape_regal_reference.py
  scrape_regal_support.py
```

---

## License / content

The **server code** is yours to use as in your repo. The **Markdown mirrors** are derived from Regal’s public sites; use them in line with Regal’s terms and your internal policies.
