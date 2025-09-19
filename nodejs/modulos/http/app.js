//const http = require('http');// Importa o módulo HTTP
import http from 'http';// Importa o módulo HTTP
// Cria um servidor HTTP que responde com "Hello World!" para todas as requisições
http.createServer((req, res) => {// Função de callback que lida com as requisições
  res.writeHead(200, {'Content-Type': 'text/plain'});// Define o cabeçalho da resposta com status 200 e tipo de conteúdo texto simples
  res.end('Hello World!');// Envia a resposta "Hello World!" e finaliza a resposta
}).listen(8080);// O servidor escuta na porta 8080
console.log('Servidor rodando em http://localhost:8080/');// Loga uma mensagem indicando que o servidor está rodando