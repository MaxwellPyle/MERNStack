const mongoose = require('mongoose');

const JokeSchema = new mongoose.Schema({
        setup:{ 
            type: String,
            required: [true, "setup is required!"],
            minLength: [5, "min length is 5 characters!"]
    },
    punchline: { 
        type: String,
        required: [true, "punchline is required!"],
        minLength: [5, "min length is 5 characters!"]
    },
    },
    { timestamps: true }
);

const Joke = mongoose.model('Joke', JokeSchema);

module.exports = Joke;