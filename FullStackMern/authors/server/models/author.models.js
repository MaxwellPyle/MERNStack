const mongoose = require('mongoose');

const AuthorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "name is required!"],
        minLength: [3, "min length is 3 characters!"]
    }
    },
    {timestamps:true}
)

const Author = mongoose.model('Product', AuthorSchema);

module.exports = Author;