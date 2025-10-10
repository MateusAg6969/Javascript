const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/' && req.method === 'GET') {
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end('Rota principal');
    } else if (req.url === '/sobre' && req.method === 'GET') {
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end('Rota sobre');
    } else if (req.url === '/contato' && req.method === 'GET') {
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end('Rota contato');
    } else {
        res.writeHead(404, {'Content-Type': 'text/plain'});
        res.end('Rota não encontrada');
    }
});

server.listen(3000, () => {
    console.log('Servidor rodando em http://localhost:3000');
});