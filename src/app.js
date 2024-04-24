const express = require("express");

const app = express();

const conexao = require("../infra/conexao")

app.use(express.json());

function buscarLivroPorIsbn(isbn) {
    return livros.filter(livro => livro.isbn === parseInt(isbn));
}

function buscarIsbnLivro(isbn) {
    return livros.findIndex(livro => livro.isbn === parseInt(isbn));
}

// get

app.get('/', (req, res) => {
    res.send("Rota padrão");

})

app.get('/livros', (req, res) => {
    const sql = "SELECT * FROM livros;";
    conexao.query(sql, (error, result, fields) => {
        const linha = result[0]
        if (error) {
            res.status(404).json({ 'error': error });
        } else {
            res.status(200).json(result);
        }
    });
});

app.get('/livros/:isbn', (req, res) => {
    const isbn = req.params.isbn;
    const sql = "SELECT * FROM livros WHERE isbn=?;";
    conexao.query(sql, [isbn], (error, result, fields) => {
        if (error) {
            res.status(404).json({ 'error': error });
        } else {
            res.status(200).json(linha);
        }
    });
});


//post

app.post('/livros', (req, res) => {

    const livro = req.body;
    const sql = "INSERT INTO livros SET ?;";
    conexao.query(sql, [livro], (error, result, fields) => {
        if (error) {
            res.status(404).json({ 'error': error });
        } else {
            res.status(201).json(result);
        }
    });
});


//delete

app.delete('/livros/:isbn', (req, res) => {
    const isbn = req.params.isbn;
    const sql = "DELETE FROM livros WHERE isbn=?;";
    conexao.query(sql, [isbn], (error, result, fields) => {
        if (error) {
            res.status(404).json({ 'error': error });
        } else {
            res.status(200).json(result);
        }
    });
});


//put

app.put('/livros/:isbn', (req, res) => {
    const livro = req.body;
    const isbn = req.params.isbn;
    const sql = "UPDATE livros SET ? WHERE isbn=?;";
    conexao.query(sql, [livro, isbn], (error, result, fields) => {
        if (error) {
            res.status(404).json({ 'error': error });
        } else {
            res.status(201).json(result);
        }
    });
});



module.exports = app;
