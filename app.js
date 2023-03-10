const https = require('http')
const fs = require('fs')

const server = https.createServer((req, res)=>{
    const fileStream = fs.createReadStream('./content/bigFile.txt', 'utf8');
    fileStream.on('open', ()=>{
        fileStream.pipe(res)
    })
    fileStream.on('error', (err)=>{
        res.end(err);
    })
})

server.listen(3000)
