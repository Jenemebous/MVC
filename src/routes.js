const Router = require("express");
const LivroController = require("./app/controllers/LivroController");
const router = Router();

router.get('/livros',LivroController.index );
router.get('/livros/:isbn', LivroController.show );
router.post('/livros', LivroController.store);
router.delete('/livros/:isbn', LivroController.delete );
router.put('/livros/:isbn', LivroController.update );

module.exports = router;