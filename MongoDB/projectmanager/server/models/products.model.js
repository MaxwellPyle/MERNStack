const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    title: { 
        type: String, 
        required: [true, "title is required!"], 
        minLength: [5, "min length is 5 characters!"]
    },
    price: { 
        type: Number, 
        required: [true, "price is required!"], 
        minLength: [1, "min length is 5 characters!"]
    },
    description: {
        type: String, 
        required: [true, "description is required!"], 
        minLength: [10, "min length is 10 characters!"]
    },
    },
    { timestamps: true }
);

const Product = mongoose.model('Product', ProductSchema);

module.exports = Product;