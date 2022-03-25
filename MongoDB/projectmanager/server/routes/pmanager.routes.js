const ProductsController = require("../controllers/products.controller");

module.exports = app => {
    app.get('/api/products', ProductsController.findAllProducts);
    app.get('/api/products/:id', ProductsController.findOneProduct);
    app.post('/api/products/new', ProductsController.createNewProduct);
    app.put('/api/products/edit/:id', ProductsController.updateExistingProduct);
}
