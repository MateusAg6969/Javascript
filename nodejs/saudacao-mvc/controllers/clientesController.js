const loginModel = require('../models/loginModel');

module.exports = {
    clientes: (req, res) => {
        res.sendFile('clientes.html', { root: './views' });
    },
    login : (req, res) => {
        res.sendFile('login.html', { root: './views' });
    },
    autenticar: (req, res) => {
        const { email, senha } = req.body;
        const mensagem = loginModel.autenticarUsuario(email, senha);
        res.send(`<h1>${mensagem}</h1>`);
    }
};