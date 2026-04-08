#!/usr/bin/env python3
"""
Download all public Help Center articles from https://support.regal.ai/hc/en-us
via the Zendesk Help Center API, and save Markdown under ./regal_support_md/.
"""

from __future__ import annotations

import html
import json
import re
import time
import urllib.request
from pathlib import Path

from markdownify import markdownify as html_to_md

API_BASE = "https://support.regal.ai/api/v2/help_center/en-us/articles.json"
OUT_DIR = Path(__file__).resolve().parent / "regal_support_md"
USER_AGENT = "Mozilla/5.0 (compatible; RegalSupportMirror/1.0; +local scrape)"
SLEEP_SEC = 0.15


def fetch_json(url: str) -> dict:
    req = urllib.request.Request(url, headers={"User-Agent": USER_AGENT, "Accept": "application/json"})
    with urllib.request.urlopen(req, timeout=120) as resp:
        return json.loads(resp.read().decode("utf-8"))


def article_slug_from_url(html_url: str) -> str:
    m = re.search(r"/articles/([^/?#]+)/?$", html_url)
    if m:
        return m.group(1)
    return "unknown"


def body_html_to_markdown(raw_html: str) -> str:
    if not raw_html or not raw_html.strip():
        return ""
    decoded = html.unescape(raw_html)
    md = html_to_md(decoded, heading_style="ATX", bullets="-")
    return re.sub(r"\n{3,}", "\n\n", md).strip()


def main() -> None:
    OUT_DIR.mkdir(parents=True, exist_ok=True)
    manifest: list[dict] = []
    url: str | None = API_BASE + "?per_page=100"
    page_idx = 0

    while url:
        page_idx += 1
        print(f"Fetching page {page_idx}: {url[:80]}…", flush=True)
        data = fetch_json(url)
        articles = data.get("articles") or []
        for art in articles:
            aid = art.get("id")
            title = (art.get("title") or art.get("name") or "Untitled").strip()
            html_url = art.get("html_url") or ""
            slug = article_slug_from_url(html_url)
            safe_slug = re.sub(r"[^\w\-]+", "-", slug).strip("-")[:200] or str(aid)
            filename = f"{safe_slug}.md"
            path = OUT_DIR / filename

            body_html = art.get("body") or ""
            md_body = body_html_to_markdown(body_html)
            front = (
                "---\n"
                f'id: {aid}\n'
                f'title: {json.dumps(title, ensure_ascii=False)}\n'
                f'html_url: {json.dumps(html_url, ensure_ascii=False)}\n'
                f'updated_at: {json.dumps(art.get("updated_at") or "", ensure_ascii=False)}\n'
                "---\n\n"
            )
            text = front + f"# {title}\n\n" + (md_body if md_body else "_No body in API response._\n")

            path.write_text(text, encoding="utf-8")
            manifest.append(
                {
                    "id": aid,
                    "slug": safe_slug,
                    "title": title,
                    "html_url": html_url,
                    "file": filename,
                    "ok": True,
                }
            )
            time.sleep(SLEEP_SEC)

        url = data.get("next_page")

    (OUT_DIR / "_manifest.json").write_text(
        json.dumps({"source": "https://support.regal.ai/hc/en-us", "count": len(manifest), "articles": manifest}, indent=2),
        encoding="utf-8",
    )
    print(f"Done. Wrote {len(manifest)} articles to {OUT_DIR}", flush=True)


if __name__ == "__main__":
    main()
