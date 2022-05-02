const Customer = require('../models/customer.model');

module.exports.findAllCustomers = (req, res) => {
    Customer.find()
        .then(allCustomers=>{
            res.json({ results: allCustomers })
        })
        .catch(err => res.json({ message: "something went wrong: ", err: err }))
}

module.exports.getOneCustomer = (req, res) => {
    Customer.findOne({ _id: req.params.id })
        .then(foundCustomer => {
            res.json({ results: foundCustomer })
        })
        .catch(err => res.json({ message: "something went wrong: ", err: err }))
}

module.exports.createCustomer = (req, res) => {
    console.log("req.body: ", req.body);
    Customer.create(req.body)
        .then(newlyCreatedCustomer => {
            res.json({ results: newlyCreatedCustomer })
        })
        .catch(err => res.json({ message: "something went wrong: ", err: err }))
}

module.exports.updateExistingCustomer = (req, res) => {
    Customer.findOneAndUpdate(
        { _id: req.params.id }, 
        req.body,
        { new: true, runValidators: true }
        )
            .then(updatedCustomer=>{
                res.json({ results: updatedCustomer })
            })
            .catch(err => res.json({ message: "something went wrong: ", err: err }))
}

module.exports.deleteExistingCustomer = (req, res) => {
    Customer.deleteOne({_id: req.params.id})
        .then(deletedCustomer=>{
            res.json({ results: deletedCustomer })
        })
        .catch(err => res.json({ message: "something went wrong: ", err: err }))
}