const Joke = require("../models/jokes.model");

module.exports.findAllJokes = (req, res) => {
    Joke.find()
        .then(allJokes => res.json({  jokes: allJokes }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}

module.exports.findOneJoke = (req, res) => {
    Joke.findOne({ id: req.params.id })
        .then(OneJoke => res.json({ joke: OneJoke }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }))
}

module.exports.createNewJoke = (req, res) => {
    Joke.create(req.body)
        .then(newlyCreatedJoke => res.json({ Joke: newlyCreatedJoke }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}

module.exports.updateExistingJoke = (req, res) => {
    Joke.findOneAndUpdate(
        { _id: req.params.id },
        req.body,
        { new: true, runValidators: true }
    )
        .then(updatedJoke => res.json({ Joke: updatedJoke }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}

module.exports.deleteAnExistingJoke = (req, res) => {
    Joke.deleteOne({ _id: req.params.id })
        .then(result => res.json({ result: result }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}