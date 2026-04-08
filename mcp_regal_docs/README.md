# Regal Knowledge MCP server

This folder is a **Model Context Protocol (MCP)** server (`server.js`) that exposes **three** local mirrors of Regal content as **resources** and **tools** so Cursor, Claude Code, Codex, or other MCP clients can search and read them **without calling the live websites at runtime**.

### What’s included (summary)

| Mirror | Source | Local folder (default) | Use for |
|--------|--------|-------------------------|--------|
| Developer docs | [developer.regal.ai/docs](https://developer.regal.ai/docs/) | `../regal_docs_md/` | Product how-tos, integrations, AI agent setup |
| **API reference** | [developer.regal.ai/reference/api](https://developer.regal.ai/reference/api) | `../regal_reference_md/` | REST/events endpoints, bodies, headers (e.g. Post Custom Event, Send Message) |
| Knowledge Hub | [support.regal.ai](https://support.regal.ai/hc/en-us) | `../regal_support_md/` | Journeys, campaigns, agent desktop, ops guides |

Scrape scripts live in the **parent** repo directory. This server only reads the generated `.md` files.

---

## What it does (walkthrough)

1. **On startup** your MCP client launches `node server.js` with **stdio** transport (stdin/stdout JSON-RPC). You do **not** keep a terminal open with `npm start` for normal IDE use—that would occupy the same stdio channel the client needs.

2. **It reads Markdown from disk** (no network at runtime):
   - **Developer documentation** — mirror of [developer.regal.ai/docs](https://developer.regal.ai/docs/) (`../regal_docs_md/` by default).
   - **API reference** — mirror of [developer.regal.ai/reference](https://developer.regal.ai/reference/api) (Post Custom Event, Send Message, list endpoints, branding APIs, etc.; `../regal_reference_md/` by default).
   - **Knowledge Hub** — mirror of [support.regal.ai](https://support.regal.ai/hc/en-us) Help Center articles (`../regal_support_md/` by default).

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

Do **Step 0** once per machine. Then follow **Cursor**, **Claude Code**, **OpenAI Codex**, or (optionally) **Claude Desktop**.  
*(The same instructions are duplicated in the repo root `README.md`.)*

### Step 0 — Prepare the server and data (everyone)

1. From **this directory**, install dependencies: `npm install`.
2. From the **parent** `regal/` directory, run the three scrape scripts (Python venv with `markdownify`):
   ```bash
   cd ..
   .venv/bin/python scrape_regal_docs.py
   .venv/bin/python scrape_regal_reference.py
   .venv/bin/python scrape_regal_support.py
   ```
3. **Absolute path** to this server (use in every client):
   ```bash
   realpath "$(pwd)/server.js"
   ```
   (Run from `mcp_regal_docs/`, or substitute the full path manually.)

---

### Cursor

1. **Cursor** → **Settings** → search **MCP** → open the MCP JSON / add server.
2. Add:

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

3. Use your real path from Step 0; optionally `${workspaceFolder}/mcp_regal_docs/server.js` if supported.
4. **Reload MCP** or restart Cursor. Confirm **`regal-knowledge`** and **nine** tools.

**Typical config paths:** `~/.cursor/mcp.json` (macOS/Linux), `%USERPROFILE%\.cursor\mcp.json` (Windows).

**Optional `env`:** `REGAL_DOCS_MD_DIR`, `REGAL_REFERENCE_MD_DIR`, `REGAL_SUPPORT_MD_DIR` if mirrors are not default `../` folders.

---

### Claude Code

Docs: [Claude Code MCP](https://docs.anthropic.com/en/docs/claude-code/mcp).

```bash
claude mcp add --transport stdio regal-knowledge -- node /ABSOLUTE/PATH/TO/mcp_regal_docs/server.js
```

Optional: `--env VAR=value` before the server name. Verify: `claude mcp list`, then **`/mcp`** (and **`/doctor`** if needed).

---

### OpenAI Codex

Docs: [Codex MCP](https://developers.openai.com/codex/mcp).

```bash
codex mcp add regal-knowledge -- node /ABSOLUTE/PATH/TO/mcp_regal_docs/server.js
```

Or in **`~/.codex/config.toml`** (or project `.codex/config.toml`):

```toml
[mcp_servers.regal-knowledge]
command = "node"
args = ["/ABSOLUTE/PATH/TO/mcp_regal_docs/server.js"]
```

Use **`/mcp`** in the Codex TUI to confirm.

---

### Claude Desktop (optional)

**macOS:** `~/Library/Application Support/Claude/claude_desktop_config.json`  
**Windows:** `%APPDATA%\Claude\claude_desktop_config.json`

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

Restart the Claude app after saving.

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
| Claude Code / Codex can’t start server | Use **`--transport stdio`** for Claude Code; confirm `node` and `server.js` paths. Re-run `claude mcp list` or `codex mcp list`. |

---

## Repo layout (default)

```text
regal/
  mcp_regal_docs/         ← this server (server.js, package.json, node_modules)
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
