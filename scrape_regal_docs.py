#!/usr/bin/env python3
"""
Fetch all https://developer.regal.ai/docs/* pages and save Markdown under ./regal_docs_md/.
Discovery: scrape href="/docs/..." from the docs hub HTML.
"""

from __future__ import annotations

import json
import re
import time
import urllib.error
import urllib.request
from pathlib import Path

from bs4 import BeautifulSoup
from markdownify import markdownify as html_to_md

BASE = "https://developer.regal.ai"
INDEX_URL = f"{BASE}/docs/"
OUT_DIR = Path(__file__).resolve().parent / "regal_docs_md"
USER_AGENT = "Mozilla/5.0 (compatible; RegalDocsMirror/1.0; +local scrape)"
SLEEP_SEC = 0.35


def fetch(url: str) -> str:
    req = urllib.request.Request(
        url,
        headers={"User-Agent": USER_AGENT, "Accept": "text/html,application/xhtml+xml"},
    )
    with urllib.request.urlopen(req, timeout=90) as resp:
        return resp.read().decode("utf-8", errors="replace")


def discover_slugs() -> list[str]:
    html = fetch(INDEX_URL)
    slugs = sorted(set(re.findall(r'href="/docs/([a-z0-9-]+)"', html)))
    if not slugs:
        raise RuntimeError("No /docs/ slugs found — hub HTML may have changed.")
    return slugs


def article_html_to_markdown(fragment: str) -> str:
    soup = BeautifulSoup(fragment, "lxml")
    for node in soup.select(".suggestEdits, .rm-SuggestEdit, script, style"):
        node.decompose()
    # Prefer main prose; header often duplicates first paragraph in excerpt.
    body = soup.select_one("section.content-body") or soup
    header = soup.select_one("header#content-head h1")
    title = header.get_text(strip=True) if header else ""
    md_body = html_to_md(str(body), heading_style="ATX", bullets="-")
    md_body = re.sub(r"\n{3,}", "\n\n", md_body).strip()
    if title:
        return f"# {title}\n\n{md_body}\n"
    return md_body + "\n"


def scrape_page(slug: str) -> tuple[str, str | None]:
    url = f"{BASE}/docs/{slug}"
    try:
        html = fetch(url)
    except urllib.error.HTTPError as e:
        return "", f"{e.code} {e.reason}"
    m = re.search(r"<article[^>]*>(.*?)</article>", html, re.DOTALL | re.IGNORECASE)
    if not m:
        return "", "no <article> in response"
    md = article_html_to_markdown(m.group(1))
    return md, None


def main() -> None:
    OUT_DIR.mkdir(parents=True, exist_ok=True)
    slugs = discover_slugs()
    manifest: list[dict] = []

    for i, slug in enumerate(slugs):
        path = OUT_DIR / f"{slug}.md"
        print(f"[{i + 1}/{len(slugs)}] {slug} …", flush=True)
        md, err = scrape_page(slug)
        manifest.append({"slug": slug, "url": f"{BASE}/docs/{slug}", "ok": err is None, "error": err})
        if err:
            print(f"  skip: {err}")
        else:
            path.write_text(md, encoding="utf-8")
        time.sleep(SLEEP_SEC)

    (OUT_DIR / "_manifest.json").write_text(
        json.dumps({"source": INDEX_URL, "pages": manifest}, indent=2),
        encoding="utf-8",
    )
    ok = sum(1 for m in manifest if m["ok"])
    print(f"Done. Wrote {ok}/{len(slugs)} files to {OUT_DIR}")


if __name__ == "__main__":
    main()
