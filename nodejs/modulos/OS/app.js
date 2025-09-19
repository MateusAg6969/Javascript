//const os = require('os');// Importa o módulo OS (sistema operacional)
import os from 'os';// Importa o módulo OS (sistema operacional)
// Exibe informações sobre o sistema operacional
console.log('Arquitetura do sistema:', os.arch());// Exibe a arquitetura do sistema (ex: x64, arm)
console.log('Quantidade de CPUs', os.cpus());length;// Exibe o número de CPUs disponíveis
console.log('Memória Total (bytes)', os.totalmem());// Exibe a quantidade total de memória em bytes
console.log('Memória livre (bytes):', os.freemem());// Exibe a quantidade de memória livre em bytes
console.log(os.platform());// Exibe a plataforma do sistema operacional 