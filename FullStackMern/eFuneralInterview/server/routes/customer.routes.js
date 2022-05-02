const CustomerController = require('../controllers/customer.controller');

module.exports = app => {
    app.get('/api/customers', CustomerController.findAllCustomers)
    app.get('/api/customers/:id', CustomerController.getOneCustomer)
    app.post('/api/customers/create', CustomerController.createCustomer)
    app.put('/api/customers/edit/:id', CustomerController.updateExistingCustomer)
    app.delete('/api/customers/delete/:id', CustomerController.deleteExistingCustomer)
}
