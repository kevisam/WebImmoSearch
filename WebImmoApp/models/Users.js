const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    name:{
        type: String,
        required: true
    },
    name:{
        type: String,
        required: true
    },
    phone:{
        type: Number,
        required: true
    },

    email:{
        type: String,
        required: true
    },
    address:{
        type: String,
        required: true
    },

    postcode:{
        type: Number,
        required: true
    },
    municipality:{
        type: String,
        required: true
    },
    agency:{
        type: String,
    },
    IPINumber:{
        type: Number,
    },

    
})

const User = mongoose.model('User', UserSchema);

module.exports = User;