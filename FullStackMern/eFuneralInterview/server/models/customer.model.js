const mongoose = require('mongoose');

const CustomerSchema = new mongoose.Schema({
    firstName: {
        type: String
    },
    lastName: { 
        type: String
    },
    homePhone: {
        type: Number
    },
    cellPhone: {
        type: Number
    },
    streetAddress: {
        type: String
    },
    city: { 
        type: String
    },
    state: { 
        type: String
    },
    zip: { 
        type: Number
    },
    dateOfBirth: {
        type: String
    },
    },
    {timestamps:true}
)

const Customer = mongoose.model('Customer', CustomerSchema);

module.exports = Customer;
