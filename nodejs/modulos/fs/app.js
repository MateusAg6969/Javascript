//const fs = require('fs');// Importa o módulo de sistema de arquivos
import fs from 'fs'; // Importa o módulo de sistema de arquivos (usando sintaxe ES6)
// Lê o conteúdo de um arquivo de forma assíncrona
fs.readFile('example.txt', 'utf8', (err, data) => { // Lê o arquivo 'example.txt' de forma assíncrona usando codificação UTF-8
    if (err) { // Se ocorrer um erro durante a leitura
        console.error('Erro ao ler arquivo:', err); // Exibe o erro no console
        return; // Encerra a função em caso de erro
    }
    console.log('Conteúdo do arquivo:', data); // Exibe o conteúdo do arquivo no console
});

console.log('Essa mensagem aparece primeiro.');// Mensagem que aparece antes da leitura do arquivo, demonstrando a natureza assíncrona da operação