module.exports = {
    autenticarUsuario: (email, senha) => {
        if (email === 'adm@gmail.com' && senha === '123') {
             acesso = "liberado";
        } else {
             acesso = "negado";
        }
        return `Olá ${email}, seu acesso foi ${acesso}!`;
    }
};