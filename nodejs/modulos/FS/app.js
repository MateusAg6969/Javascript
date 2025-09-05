// Importa o módulo 'fs' (File System) do Node.js, que permite trabalhar com arquivos do sistema operacional
const fs = require('fs');

// Chama a função 'readFile' do módulo 'fs' para ler o conteúdo do arquivo 'example.txt'
// O primeiro argumento é o nome do arquivo a ser lido
// O segundo argumento é o encoding ('utf8'), que garante que o conteúdo será lido como texto
// O terceiro argumento é uma função callback que será executada após a tentativa de leitura do arquivo
fs.readFile('example.txt', 'utf8', (err, data) => {
    // Verifica se ocorreu algum erro durante a leitura do arquivo
    if (err) {
        // Se houver erro, exibe uma mensagem de erro no console
        // O erro pode ser, por exemplo, arquivo inexistente ou falta de permissão
        console.error('Erro ao ler arquivo:', err);
        // Retorna para evitar que o restante do código dentro do callback seja executado
        return;
    }
    // Se não houver erro, exibe o conteúdo do arquivo no console
    console.log('Conteúdo do arquivo:', data);
});

// Esta mensagem será exibida no console antes da leitura do arquivo ser concluída
// Isso ocorre porque 'readFile' é uma operação assíncrona (não bloqueia o fluxo do programa)
// Demonstra o funcionamento assíncrono do Node.js
console.log('Essa mensagem aparece primeiro.');