const ProductController = require('../controllers/product.controller');

module.exports = app => {
    app.get('/api/products', ProductController.findAllProducts)
    app.get('/api/products/:id', ProductController.getOneProduct)
    app.post('/api/products/create', ProductController.createProduct)
    app.put('/api/products/edit/:id', ProductController.updateExistingProduct)
    app.delete('/api/products/delete/:id', ProductController.deleteExistingProduct)
}
