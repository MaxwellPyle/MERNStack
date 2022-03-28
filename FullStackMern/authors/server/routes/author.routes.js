const AuthorController = require('../controllers/product.controller');

module.exports = app => {
    app.get('/api/authors', AuthorController.findAllAuthors)
    app.get('/api/authors/:id', AuthorController.getOneAuthor)
    app.post('/api/authors/create', AuthorController.createAuthor)
    app.put('/api/authors/edit/:id', AuthorController.updateExistingAuthor)
    app.delete('/api/authors/delete/:id', AuthorController.deleteExistingAuthor)
}
