const usuarios = [
    {
        nome: 'Matheus',
        email: 'matheus@golpel.com'
    },
    {
        nome: 'Marcos',
        email: 'marcos@golpel.com'
    },
    {
        nome: 'Lucas',
        email: 'lucas@golpel.com'
    },
    {
        nome: 'João',
        email: 'joao@golpel.com'
    }
];

function retornarUsuarios() {
    return usuarios;
}

function adicionarNovoUsuario(usuario) {
    usuarios.push(usuario);
}

module.exports = {
    retornarUsuarios,
    adicionarNovoUsuario
}