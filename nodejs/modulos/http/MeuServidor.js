const http = require("http");

const PORT = 3000;

const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "text/plain; charset=utf-8");

  // Controle de rotas
  if (req.url === "/" && req.method === "GET") {
    res.statusCode = 200;
    res.end("Página inicial");
  } 
  else if (req.url === "/sobre" && req.method === "GET") {
    res.statusCode = 200;
    res.end("Página sobre");
  } 
  else if (req.url === "/contato" && req.method === "POST") {
    res.statusCode = 200;
    res.end("Formulário de contato enviado!");
  } 
  else {
    res.statusCode = 404;
    res.end("Rota não encontrada");
  }
});

server.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
