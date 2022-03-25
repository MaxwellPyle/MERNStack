const ProductsController = require("../controllers/products.controller");

module.exports = app => {
    app.get('/api/products', ProductsController.findAllProducts);
    app.post('/api/products/new', ProductsController.createNewProduct);
}
