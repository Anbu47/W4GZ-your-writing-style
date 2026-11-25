"""Make transparent copies of the writer portraits for the result card.

Each portrait in assets/writers/ is painted on its own paper background, and the
backgrounds differ slightly. The result card uses one paper colour for everyone, so
this script removes each portrait's background (flood fill from the edges, so light
parts inside the figure stay) and writes assets/writers/cut/<id>.webp.

Run after replacing portraits:  python3 tools/cut-portraits.py
"""
import os
from PIL import Image, ImageDraw, ImageFilter

ROOT = os.path.join(os.path.dirname(__file__), '..', 'assets', 'writers')
OUT = os.path.join(ROOT, 'cut')
KEY = (255, 0, 255)
os.makedirs(OUT, exist_ok=True)
for name in sorted(os.listdir(ROOT)):
    if not name.endswith('.webp'):
        continue
    im = Image.open(os.path.join(ROOT, name)).convert('RGB')
    work = im.copy()
    w, h = work.size
    for xy in [(0, 0), (w - 1, 0), (0, h - 1), (w - 1, h - 1), (w // 2, 0), (0, h // 2), (w - 1, h // 2)]:
        if work.getpixel(xy) != KEY:
            ImageDraw.floodfill(work, xy, KEY, thresh=34)
    mask = Image.new('L', (w, h), 255)
    px, mp = work.load(), mask.load()
    for y in range(h):
        for x in range(w):
            if px[x, y] == KEY:
                mp[x, y] = 0
    mask = mask.filter(ImageFilter.GaussianBlur(0.8))  # soften the cut edge a little
    out = im.convert('RGBA')
    out.putalpha(mask)
    out.save(os.path.join(OUT, name), 'WEBP', quality=90, method=6)
print('done')
