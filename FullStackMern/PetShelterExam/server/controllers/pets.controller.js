const Pet = require('../models/pets.model');


module.exports.findAllPets = (req, res) => {
    Pet.find()
        .then(allPets=>{
            res.json({ results: allPets })
        })
        .catch(err => res.json({ message: "something went wrong: ", err: err }))
}

module.exports.getOnePet = (req, res) => {
    Pet.findOne({ _id: req.params.id })
        .then(foundPet => {
            res.json({ results: foundPet })
        })
        .catch(err => res.json({ message: "something went wrong: ", err: err }))
}

module.exports.createPet = (req, res) => {
    console.log("req.body: ", req.body);
    Pet.create(req.body)
        .then(newlyCreatedPet => {
            res.json({ results: newlyCreatedPet })
        })
        .catch(err => res.json({ message: "something went wrong: ", err: err }))
}

module.exports.updateExistingPet = (req, res) => {
    Pet.findOneAndUpdate(
        { _id: req.params.id }, 
        req.body,
        { new: true, runValidators: true }
        )
            .then(updatedPet=>{
                res.json({ results: updatedPet })
            })
            .catch(err => res.json({ message: "something went wrong: ", err: err }))
}

module.exports.deleteExistingPet = (req, res) => {
    Pet.deleteOne({_id: req.params.id})
        .then(deletedPet=>{
            res.json({ results: deletedPet })
        })
        .catch(err => res.json({ message: "something went wrong: ", err: err }))
}