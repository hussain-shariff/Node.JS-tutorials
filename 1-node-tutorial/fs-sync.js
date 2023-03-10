const fs = require('fs')

console.log('starting');

const firstFile = fs.readFileSync('./content/first.txt', 'utf8')
const secondFile = fs.readFileSync('./content/subfolder/second.txt', 'utf8')

fs.writeFileSync('./content/result.txt', `Hello world this is result file : ${ firstFile } ,${secondFile}`)
console.log('task completed');
console.log('starting with the next one');