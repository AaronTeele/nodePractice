const TextCopier = require('./services/textCopier');
const ImgCopier = require('./services/imgCopier');

TextCopier.copyFile('hello.txt', 'Hello, my name is Aaron.\n');

ImgCopier.copyJPGTo('./services/wwe.jpg', 'imageFolder', 'wweImgCopy.jpg');