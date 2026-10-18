import fitz
from PIL import Image
from pathlib import Path

doc = fitz.open('Entregable-2/Entregable-2-ASummerTenshi.pdf')
print('paginas:', len(doc))
out = Path('capturas_tmp/pdf')
out.mkdir(parents=True, exist_ok=True)
thumbs = []
for i, page in enumerate(doc):
    pix = page.get_pixmap(dpi=60)
    p = out / f'p{i+1:02d}.png'
    pix.save(str(p))
    img = Image.open(p).convert('RGB')
    img.thumbnail((380, 540))
    thumbs.append(img)

cols = 5
rows = (len(thumbs) + cols - 1) // cols
sheet = Image.new('RGB', (cols * 390, rows * 560), (230, 230, 230))
for i, t in enumerate(thumbs):
    sheet.paste(t, ((i % cols) * 390 + 5, (i // cols) * 560 + 10))
sheet.save(out / 'contact-sheet.png')
print('contact-sheet ok')
