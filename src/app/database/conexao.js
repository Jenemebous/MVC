const mysql = require('mysql');

const conexao = mysql.createConnection({
    host: 'localhost',
    port: '3306',
    user: 'root',
    password: 'meubdd.root',
    database: 'lector'
});

conexao.connect();

/**
 * EXECUTA UM CÓDIGO SQL COM OU SEM VALORES
 * @param {string} sql  INSTRUÇÃO SQL A SER EXECUTADA
 * @param {string=isbn | [livro, isbn]} valores A SEREM PASSADOS PARA O SQL
 * @param {string} mensagemReject MENSAGEM A SER EXIBIDA
 * @returns OBJ DA PROMISE
 */

const consulta = (sql, valores ='', mensagemReject) => {
    return new Promise((resolve, reject) => {
        conexao.query(sql, valores, (error, result, fields) => {
            if (error) return reject(mensagemReject);
            const row = JSON.parse(JSON.stringify(result));
            resolve(row);
        });
    });
}

module.exports = conexao;
module.exports = consulta;