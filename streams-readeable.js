const { createReadStream } = require('fs')

const reader = createReadStream('./content/bigFile.txt', 'utf8')

reader.on('data', (chunk)=>{
    console.log(chunk);
})

reader.on('error', (err)=>{
    console.log(err);
})