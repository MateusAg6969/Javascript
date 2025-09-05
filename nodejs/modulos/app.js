// Importa o módulo 'os' do Node.js, que fornece métodos para obter informações sobre o sistema operacional
const os = require('os');

// Exibe no console o título para as informações que serão mostradas a seguir
console.log('Arquitetura do sistema:');

// Exibe a quantidade de CPUs (núcleos de processamento) disponíveis no sistema
// O método os.cpus() retorna um array com informações sobre cada CPU, então usamos .length para contar
console.log('Quantidade de CPUs:', os.cpus().length);

// Exibe a plataforma do sistema operacional (ex: 'win32', 'linux', 'darwin')
console.log('Plataforma:', os.platform());

// Exibe a versão do sistema operacional (ex: número da build ou release)
console.log('Versão do SO:', os.release());

// Exibe a quantidade total de memória RAM disponível no sistema, em bytes
console.log('Memória total (bytes):', os.totalmem());

// Exibe a quantidade de memória RAM livre no sistema, em bytes
console.log('Memória livre (bytes):', os.freemem());
