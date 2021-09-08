const sharp = require('sharp');

sharp('JhonAgudelo.jpg')
    .resize(80)
    .grayscale()
    .toFile('resized.png');