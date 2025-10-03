import http from "http";

const PORT = 3000;

const server = http.createServer((req, res) => {
    const url = req.url;
    const method = req.method;

    res.setHeader("Content-Type", "text/html; charset=utf-8");

    if (url === '/') {
        res.statusCode = 200;
        res.end('<h1> Página inicial </h1>');
    }
    else if (url === '/sobre' && method === 'GET') {
        res.statusCode = 200;
        res.end('<h1>Página sobre</h1>');
    }
    else if (url === '/contato') {
        res.statusCode = 200;
        res.end('<h1>Formulário de contato enviado!</h1>');
    }
      else if (url === '/fotos') {
        res.statusCode = 200;
        res.end('<h1>Galeria de fotos</h1>');
    }
    else {
        res.statusCode = 404;
        res.end('<h1>Rota não encontrada</h1>');
    }

});

server.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});