const LivroRepository = require("../repositories/LivroRepository");

class LivroController {

    async index(req, res) {
        const row = await LivroRepository.findAll()
        res.json(row);
    };

    async show(req, res) {
        const isbn = req.params.isbn;
        const row = await LivroRepository.findById(isbn)
        res.json(row)
    }

    async store(req, res) {
       
        const livro = req.body;
        const row = await LivroRepository.create(livro);
        res.json(row);
    }

    async update(req, res) {
        const livro = req.body;
        const isbn = req.params.isbn;
        const row = await LivroRepository.update(livro, isbn);
        res.json(row);
       
    }

    async delete(req, res) {
      const isbn = req.params.isbn;
      const row = await LivroRepository.delete(isbn);
       res.json(row);

}
}

module.exports = new LivroController();
