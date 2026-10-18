from pathlib import Path
from PIL import Image

root = Path('src/assets/img')
total_before = total_after = 0
for p in sorted(root.rglob('*.png')):
    before = p.stat().st_size
    img = Image.open(p).convert('RGB')
    out = p.with_suffix('.webp')
    q = 80 if before > 2_000_000 else 82
    img.save(out, 'WEBP', quality=q, method=6)
    after = out.stat().st_size
    total_before += before
    total_after += after
    print(f'{p.name}: {before/1e6:.1f}MB -> {after/1e3:.0f}KB')
print(f'TOTAL: {total_before/1e6:.1f}MB -> {total_after/1e6:.2f}MB')
