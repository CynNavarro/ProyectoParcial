from PIL import Image
from pathlib import Path

files = sorted(Path('capturas_tmp').glob('*.png'))
files = [f for f in files if not f.name.startswith(('crop_', 'test_'))]
thumbs = []
for f in files:
    img = Image.open(f).convert('RGB')
    img.thumbnail((480, 480))
    thumbs.append((f.name, img))

cols = 4
rows = (len(thumbs) + cols - 1) // cols
cell_w = 500
cell_h = 500
sheet = Image.new('RGB', (cols * cell_w, rows * cell_h), (20, 20, 20))
from PIL import ImageDraw
d = ImageDraw.Draw(sheet)
for i, (name, img) in enumerate(thumbs):
    x = (i % cols) * cell_w + 10
    y = (i // cols) * cell_h + 24
    sheet.paste(img, (x, y))
    d.text((x, y - 16), name, fill=(255, 200, 210))
sheet.save('capturas_tmp/mosaico.png')
print('ok', len(thumbs))
