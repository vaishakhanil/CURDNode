const mongoose = require('mongoose');
const {Schema, model} = mongoose;

const UserSchema = new Schema({
    lastName: {
        type: String,
        required: true
    },
    firstName: {
        type: String,
        required: true
    },
    dob: {
        type: Date,
        required: true 
    },
    address1: {
        type: String,
        required: true
    },
    address2: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    postalCode: {
        type: String,
        required: true
    },
    country: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: Number,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    userNotes: {
        type: String,
        required: true
    }
});

const User = model('user', UserSchema);

module.exports = User;