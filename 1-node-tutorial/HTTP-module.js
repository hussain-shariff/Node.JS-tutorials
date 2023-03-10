const http = require('http')

const server = http.createServer((req, res)=>{
    if(req.url === '/'){
        res.write('Welocme to home page')
        res.end()
    }
    if(req.url === '/about'){
        res.write('Welocme to home page')
        res.end()
    }
    res.write(`
    <h1>OOPS!</h1>
    <p>It seems that the page doesn't exist</p>
    <a href="/">Back Home</a>
`)
    res.end()
})

const port = 3000;
server.listen(port)