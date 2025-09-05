// Importa o módulo 'http' do Node.js, que permite criar servidores web e lidar com requisições HTTP
const http = require('http');

// Cria um servidor HTTP usando o método 'createServer'
// O método recebe uma função callback que será executada a cada requisição recebida pelo servidor
// A função callback recebe dois parâmetros:
//   'req' (request): representa a requisição feita pelo cliente
//   'res' (response): representa a resposta que será enviada ao cliente
http.createServer((req, res) => {
  // Define o status da resposta como 200 (OK) e o cabeçalho 'Content-Type' como 'text/plain'
  // Isso indica que a resposta será um texto simples
  res.writeHead(200, {'Content-Type': 'text/plain'});

  // Envia o corpo da resposta com o texto 'Hello World!' e finaliza a resposta
  res.end('Hello World!');
  // Nenhum outro código será executado após 'res.end', pois a resposta já foi enviada
// Fecha a função callback do servidor
}).listen(8080); // Faz o servidor escutar na porta 8080
// Agora, ao acessar http://localhost:8080 no navegador, será exibido 'Hello World!'
// O servidor ficará rodando até ser interrompido manualmente (Ctrl+C no