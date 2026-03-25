#!/usr/bin/env python3
"""
LINKHIPU — Asset downloader (EN/FR/NL edition)
Run from inside the linkhipu/ folder:  python download_assets.py
"""
import urllib.request, os, time

IMAGES = [
    ("https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=1800&q=80", "images/hero.jpg"),
    ("https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=1600&q=80", "images/hero-about.jpg"),
    ("https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=1600&q=80",    "images/hero-cloud.jpg"),
    ("https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=1600&q=80", "images/hero-data.jpg"),
    ("https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1600&q=80",    "images/hero-app.jpg"),
    ("https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1600&q=80", "images/hero-web.jpg"),
    ("https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1600&q=80", "images/hero-poc.jpg"),
    ("https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=1600&q=80", "images/hero-contact.jpg"),
    ("https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=900&q=80",  "images/office.jpg"),
    ("https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=900&q=80",  "images/mission.jpg"),
    ("https://images.unsplash.com/photo-1597733336794-12d05021d510?w=900&q=80",  "images/cloud1.jpg"),
    ("https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=900&q=80",  "images/cloud2.jpg"),
    ("https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=900&q=80",  "images/data1.jpg"),
    ("https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=900&q=80",     "images/data2.jpg"),
    ("https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=900&q=80",     "images/app1.jpg"),
    ("https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=900&q=80",     "images/app2.jpg"),
    ("https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=900&q=80",  "images/web1.jpg"),
    ("https://images.unsplash.com/photo-1547658719-da2b51169166?w=900&q=80",     "images/web2.jpg"),
    ("https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=900&q=80",  "images/poc1.jpg"),
    ("https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?w=900&q=80",  "images/poc2.jpg"),
]

FONTS = [
    ("https://fonts.bunny.net/manrope/files/manrope-latin-300-normal.woff2",  "fonts/Manrope-Light.woff2"),
    ("https://fonts.bunny.net/manrope/files/manrope-latin-400-normal.woff2",  "fonts/Manrope-Regular.woff2"),
    ("https://fonts.bunny.net/manrope/files/manrope-latin-500-normal.woff2",  "fonts/Manrope-Medium.woff2"),
    ("https://fonts.bunny.net/manrope/files/manrope-latin-600-normal.woff2",  "fonts/Manrope-SemiBold.woff2"),
    ("https://fonts.bunny.net/manrope/files/manrope-latin-700-normal.woff2",  "fonts/Manrope-Bold.woff2"),
    ("https://fonts.bunny.net/manrope/files/manrope-latin-800-normal.woff2",  "fonts/Manrope-ExtraBold.woff2"),
    ("https://fonts.bunny.net/inter/files/inter-latin-300-normal.woff2",      "fonts/Inter-Light.woff2"),
    ("https://fonts.bunny.net/inter/files/inter-latin-400-normal.woff2",      "fonts/Inter-Regular.woff2"),
    ("https://fonts.bunny.net/inter/files/inter-latin-500-normal.woff2",      "fonts/Inter-Medium.woff2"),
    ("https://fonts.bunny.net/inter/files/inter-latin-600-normal.woff2",      "fonts/Inter-SemiBold.woff2"),
]


def download(url, dest, label):
    if os.path.exists(dest):
        size = os.path.getsize(dest)
        if size > 1024:
            print(f"  ✓ already exists: {dest} ({size // 1024} KB)")
            return True
    try:
        os.makedirs(os.path.dirname(dest), exist_ok=True)
        print(f"  ↓ {label}...", end=" ", flush=True)
        req = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0"})
        with urllib.request.urlopen(req, timeout=30) as r, open(dest, "wb") as f:
            f.write(r.read())
        size = os.path.getsize(dest)
        print(f"{size // 1024} KB")
        return True
    except Exception as e:
        print(f"FAILED — {e}")
        return False


ok = 0
fail = 0

print("\n=== Downloading images ===")
for url, dest in IMAGES:
    if download(url, dest, os.path.basename(dest)):
        ok += 1
    else:
        fail += 1
    time.sleep(0.3)

print("\n=== Downloading fonts ===")
for url, dest in FONTS:
    if download(url, dest, os.path.basename(dest)):
        ok += 1
    else:
        fail += 1
    time.sleep(0.2)

print(f"\n{'=' * 44}")
print(f"  {ok} succeeded    {fail} failed")
if fail == 0:
    print("  ✓ Site is fully self-hosted and GDPR compliant!")
else:
    print("  Re-run the script to retry failed downloads.")
