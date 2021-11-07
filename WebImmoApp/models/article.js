const mongoose = require('mongoose')

const articleSchema = new mongoose.Schema({
    housetype: {
        type:String,
        required : true
    },
    price:{
        type:Number
    },
    nrRooms:{
        type:String
    },
    postalCode:{
        type:Number
    },
    author:{
        type:String
    }
     /*,
   
    description: {
        type:String
    },
    createdAt: {
        type: Date,
        default: Date.now
    } */
})

module.exports = mongoose.model('Article', articleSchema)