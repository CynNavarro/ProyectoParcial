from PIL import Image
img = Image.open('capturas_tmp/inicio-desktop.png')
w, h = img.size
print('size', w, h)
# Recortes: servicios (~1655-2100), portfolio (~2100-2700), cta (~3400-3900)
for name, y0, y1 in [('servicios', 1550, 2150), ('portfolio', 2150, 2750), ('final', 3200, h)]:
    img.crop((0, y0, w, min(y1, h))).save(f'capturas_tmp/crop_{name}.png')
    print('saved', name)
