from PIL import Image
img = Image.open('capturas_tmp/v2-home-desktop.png')
w, h = img.size
img.crop((0, h - 1250, w, h)).save('capturas_tmp/crop_cta_footer.png')
print('ok')
