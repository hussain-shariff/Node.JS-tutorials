const http = require('http')
const {readFileSync} = require('fs')

const homePageHtml = readFileSync('./NavBar/index.html')
const homePageCss = readFileSync('./NavBar/style.css')
const homePageJs = readFileSync('./NavBar/browser-app.js')

const server = http.createServer((req, res)=>{
    const url = req.url
    // Home Page
    if(url === "/"){
        res.writeHead(200, {'content-type' : 'text/html'})
        res.write(homePageHtml)
        res.end()
    }
    // Home Page CSS
    else if(url === "/style.css"){
        res.writeHead(200, {'content-type' : 'text/css'})
        res.write(homePageCss)
        res.end()
    }
    // Home Page JS
    else if(url === "/browser-app.js"){
        res.writeHead(200, {'content-type' : 'text/javascript'})
        res.write(homePageJs)
        res.end()
    }
    // About Page
    else if(url === "/about"){
        res.writeHead(200, {'content-type' : 'text/html'})
        res.write('<h1>About Page</h1>')
        res.end()
    }
    // error page 404
    else{
        res.writeHead(404, {'content-type' : 'text/html'})
        res.write('<h1>Page Not Found</h1>')
        res.end()
    }
})

server.listen(5000)