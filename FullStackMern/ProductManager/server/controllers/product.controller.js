const Product = require('../models/product.model');


module.exports.findAllProducts = (req, res) => {
    Product.find()
        .then(allProducts=>{
            res.json({ results: allProducts })
        })
        .catch(err => res.json({ message: "something went wrong: ", err: err }))
}

module.exports.findOneProduct = (req, res) => {
    Product.findOne({ _id: req.params.id })
        .then(foundProduct => {
            res.json({ results: foundProduct })
        })
        .catch(err => res.json({ message: "something went wrong: ", err: err }))
}

module.exports.createProduct = (req, res) => {
    console.log("req.body", req.body);
    Product.create(req.body)
        .then(newlyCreatedProduct => {
            res.json({ results: newlyCreatedProduct })
        })
        .catch(err => res.json({ message: "something went wrong: ", err: err }))
}

module.exports.updateExistingProduct = (req, res) => {
    Product.findOneAndUpdate(
        { _id: req.params.id }, 
        req.body,
        { new: true, runValidators: true }
        )
            .then(updatedProduct=>{
                res.json({ results: updatedProduct })
            })
            .catch(err => res.json({ message: "something went wrong: ", err: err }))
}

module.exports.deleteExistingProduct = (req, res) => {
    Product.deleteOne({_id: req.params.id})
        .then(deletedProduct=>{
            res.json({ results: deletedProduct })
        })
        .catch(err => res.json({ message: "something went wrong: ", err: err }))
}