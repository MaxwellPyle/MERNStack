const mongoose = require('mongoose');

const PetSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "pet name is required!"],
        minLength: [3, "pet name must be at least 3 characters!"]
    },
    type: {
        type: String,
        required: [true, "pet type is required!"],
        minLength: [3, "pet type must be at least 3 characters!"]
    },
    description: {
        type: String,
        required: [true, "pet description is required!"],
        minLength: [3, "pet description must be at least 3 characters!"]
    },
    skill1: {
        type: String,
    },
    skill2: {
        type: String,
    },
    skill3: {
        type: String,
    },
    },
    {timestamps:true}
)

const Pet = mongoose.model('Pet', PetSchema);

module.exports = Pet;
