const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({

    fname: {
        type: String,
        required: true,
        trim: true
    },
    lname: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true
    },
    phone: {
        type: String,
        required: true,
        unique: true

    },
    password: {
        type: String,
        required: true,
        trim: true
    },
    address: {
        street: {
            type: String,
            trim: true
        },
        city: {
            type: String,
            trim: true
        },
        pincode: {
            type: String,
            minLength: [6, "pincode min length should be 6"],
            maxLength: [6,
                "pincode max length should be 6 "
            ],
            trim: true
        },
    }    

}, { timestamps: true });

module.exports = mongoose.model('users', userSchema)