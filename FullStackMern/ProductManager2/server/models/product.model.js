const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "title is required!"],
        minLength: [3, "min length is 3 characters!"]
    },
    price: {
        type: Number,
        required: [true, "price is required!"],
        minLength: [1, "min length is 1 character!"]
    },
    description: {
        type: String,
        required: [true, "description is required!"],
        minLength: [8, "min length is 8 characters!"]
    },
    },
    {timestamps:true}
)

const Product = mongoose.model('Product', ProductSchema);

module.exports = Product;