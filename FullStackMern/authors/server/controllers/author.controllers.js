const Author = require('../models/author.models');


module.exports.findAllAuthors = (req, res) => {
    Author.find()
        .then(allAuthors=>{
            res.json({ results: allAuthors })
        })
        .catch(err => res.json({ message: "something went wrong: ", err: err }))
}

module.exports.getOneAuthor = (req, res) => {
    Author.findOne({ _id: req.params.id })
        .then(foundAuthor => {
            res.json({ results: foundAuthor })
        })
        .catch(err => res.json({ message: "something went wrong: ", err: err }))
}

module.exports.createAuthor = (req, res) => {
    console.log("req.body: ", req.body);
    Author.create(req.body)
        .then(newlyCreatedAuthor => {
            res.json({ results: newlyCreatedAuthor })
        })
        .catch(err => res.json({ message: "something went wrong: ", err: err }))
}

module.exports.updateExistingAuthor = (req, res) => {
    Author.findOneAndUpdate(
        { _id: req.params.id }, 
        req.body,
        { new: true, runValidators: true }
        )
            .then(updatedAuthor=>{
                res.json({ results: updatedAuthor })
            })
            .catch(err => res.json({ message: "something went wrong: ", err: err }))
}

module.exports.deleteExistingAuthor = (req, res) => {
    Author.deleteOne({_id: req.params.id})
        .then(deletedAuthor=>{
            res.json({ results: deletedAuthor })
        })
        .catch(err => res.json({ message: "something went wrong: ", err: err }))
}