#!/usr/bin/env python3
"""
Search Wikimedia Commons for real photos of each Zimbabwe sports legend
and download them. Uses the Wikimedia API to find file URLs.
"""
import json
import os
import time
import urllib.parse
import urllib.request

OUT_DIR = "/home/z/my-project/public/images"
USER_AGENT = "ThrowbackJersey/1.0 (educational heritage project; contact@throwbackjersey.example)"

# For each legend, list candidate Wikimedia Commons file titles to try in order.
# These are based on common Wikipedia article infobox photos.
LEGENDS = {
    "peter-ndlovu": [
        "File:Peter Ndlovu 2006.jpg",
        "File:Peter Ndlovu.jpg",
        "File:PeterNdlovu.jpg",
    ],
    "moses-chunga": [
        "File:Moses Chunga.jpg",
        "File:MosesChunga.jpg",
    ],
    "benjani": [
        "File:Benjani Mwaruwari.jpg",
        "File:Benjani.jpg",
        "File:Benjani Mwaruwari 2010.jpg",
    ],
    "bruce-grobbelaar": [
        "File:Bruce Grobbelaar.jpg",
        "File:BruceGrobbelaar.jpg",
        "File:Bruce Grobbelaar 1982.jpg",
        "File:Bruce Grobbelaar Liverpool.jpg",
    ],
    "andy-flower": [
        "File:Andy Flower.jpg",
        "File:AndyFlower.jpg",
        "File:Andy Flower Zimbabwe.jpg",
    ],
    "heath-streak": [
        "File:Heath Streak.jpg",
        "File:HeathStreak.jpg",
        "File:Heath Streak Zimbabwe.jpg",
    ],
    "grant-flower": [
        "File:Grant Flower.jpg",
        "File:GrantFlower.jpg",
        "File:Grant Flower Zimbabwe.jpg",
    ],
}


def commons_search(query: str) -> list[dict]:
    """Search Wikimedia Commons for files matching a query."""
    url = "https://commons.wikimedia.org/w/api.php"
    params = {
        "action": "query",
        "format": "json",
        "list": "search",
        "srsearch": query,
        "srnamespace": 6,  # File: namespace
        "srlimit": 8,
    }
    full_url = f"{url}?{urllib.parse.urlencode(params)}"
    req = urllib.request.Request(full_url, headers={"User-Agent": USER_AGENT})
    try:
        with urllib.request.urlopen(req, timeout=20) as resp:
            data = json.load(resp)
            return data.get("query", {}).get("search", [])
    except Exception as e:
        print(f"  Search failed for '{query}': {e}")
        return []


def get_file_url(file_title: str) -> str | None:
    """Get the direct image URL for a Wikimedia Commons file."""
    url = "https://commons.wikimedia.org/w/api.php"
    params = {
        "action": "query",
        "format": "json",
        "titles": file_title,
        "prop": "imageinfo",
        "iiprop": "url|size|mime",
    }
    full_url = f"{url}?{urllib.parse.urlencode(params)}"
    req = urllib.request.Request(full_url, headers={"User-Agent": USER_AGENT})
    try:
        with urllib.request.urlopen(req, timeout=20) as resp:
            data = json.load(resp)
            pages = data.get("query", {}).get("pages", {})
            for page in pages.values():
                info = page.get("imageinfo", [])
                if info:
                    return info[0].get("url")
    except Exception as e:
        print(f"  File URL fetch failed for {file_title}: {e}")
    return None


def download_image(url: str, out_path: str) -> bool:
    """Download an image to a file."""
    req = urllib.request.Request(url, headers={"User-Agent": USER_AGENT})
    try:
        with urllib.request.urlopen(req, timeout=30) as resp:
            data = resp.read()
            if len(data) < 5000:  # too small, probably an error page
                return False
            with open(out_path, "wb") as f:
                f.write(data)
            return True
    except Exception as e:
        print(f"  Download failed: {e}")
        return False


def process_legend(slug: str, candidates: list[str]) -> str | None:
    """Try to find and download a real photo for a legend. Returns the output path or None."""
    print(f"\n=== {slug} ===")

    # 1. Try the direct candidate file titles first
    for title in candidates:
        print(f"  Trying: {title}")
        url = get_file_url(title)
        if url:
            out_path = os.path.join(OUT_DIR, f"legend-{slug}-real.jpg")
            if download_image(url, out_path):
                print(f"  ✓ Downloaded: {out_path} ({os.path.getsize(out_path)} bytes)")
                return out_path
        time.sleep(0.5)

    # 2. Fall back to a Commons search
    name = slug.replace("-", " ")
    print(f"  Searching Commons for: {name}")
    results = commons_search(name)
    for r in results[:5]:
        title = r["title"]
        # Skip non-image files
        if not any(title.lower().endswith(ext) for ext in [".jpg", ".jpeg", ".png"]):
            continue
        print(f"  Trying search result: {title}")
        url = get_file_url(title)
        if url:
            out_path = os.path.join(OUT_DIR, f"legend-{slug}-real.jpg")
            if download_image(url, out_path):
                print(f"  ✓ Downloaded: {out_path} ({os.path.getsize(out_path)} bytes)")
                return out_path
        time.sleep(0.5)

    print(f"  ✗ No photo found for {slug}")
    return None


def main() -> None:
    results = {}
    for slug, candidates in LEGENDS.items():
        path = process_legend(slug, candidates)
        results[slug] = path
        time.sleep(1)  # be nice to the API

    print("\n\n=== Summary ===")
    for slug, path in results.items():
        status = "✓ Found" if path else "✗ Not found"
        print(f"  {slug}: {status}")


if __name__ == "__main__":
    main()
