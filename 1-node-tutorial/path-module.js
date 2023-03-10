const path = require('path')

const filePath = path.join('content', 'subfolder', 'second.txt')
console.log(filePath);

const baseName = path.basename(filePath)
console.log(baseName);

const absolute = path.resolve(filePath)
console.log(absolute);