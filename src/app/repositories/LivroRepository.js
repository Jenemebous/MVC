const consulta = require("../database/conexao");

class LivroRepository {

    async create(livro) {
        const sql = "INSERT INTO livros SET ?";
        return consulta(sql, livro, "Não foi possível cadastrar")
    }

    async findAll() {
        const sql = "SELECT * FROM livros;";
        return consulta(sql, "Não foi possível localizar")
       
    }

    async findById(isbn) {
        const sql = "SELECT * FROM livros WHERE isbn=?;";
        return consulta(sql, isbn, "Não foi possível localizar")
       
    }

    async update(livro, isbn) {
        const sql = "UPDATE livros SET ? WHERE isbn=?;";
        return consulta(sql, [livro, isbn], "Não foi possível atualizar")
       
    }

    delete(isbn) {
        const sql = "DELETE FROM livros WHERE isbn=?;";
        return consulta(sql, isbn, "Não foi possível apagar")
       
    }
}

module.exports = new LivroRepository();
