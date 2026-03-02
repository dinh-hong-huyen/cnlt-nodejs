const http = require('http')

const server = http.createServer((req, res) => {
    console.log("URL:", req.url)
    console.log("Method:", req.method)

    if (req.url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' })
        res.end('<h1>Trang chủ</h1>')
    } else if (req.url === '/about') {
        res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' })
        res.end('<h1>Trang giới thiệu</h1>')
    } else if (req.url === '/contact') {
        res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' })
        res.end('<h1>Trang liên hệ</h1>')
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' })
        res.end('404 - Không tìm thấy trang')
    }
})

server.listen(3000, () => {
    console.log('Server running at http://localhost:3000')
})