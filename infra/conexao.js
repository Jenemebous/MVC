const mysql = require('mysql');

const conexao = mysql.createConnection({
    host: 'localhost',
    port: '3306',
    user: 'root',
    password: 'meubdd.root',
    database: 'lector'
});

conexao.connect();

module.exports = conexao;