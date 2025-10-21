import express from 'express';

const app = express();
const port = 3000;

app.use((req, res, next) => {
    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    next();
});

app.get( '/',(req, res) => {
    res.status(200).send('<h1>Pagina Inicial</h1>');
});

app.get('/sobre', (req, res) => {
    res.status(200).send('<h1>Pagina Sobre</h1>');
});

app.get('/contato', (req, res) => {
    res.status(200).send('<h1>Fale conosco</h1>');
});

app.get('/fotos', (req, res) => {
    res.status(200).send('<h1>Galeria de fotos</h1>');
});

app.use((req, res) => {
    res.status(404).send('<h1>404 - Página não encontrada</h1>');
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});