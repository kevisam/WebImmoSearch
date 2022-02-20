const mongoose = require('mongoose')

const articleSchema = new mongoose.Schema({
    housetype: {
        type:String,
        required : true
    },
    price:{
        type:Number,
        required : true
    },
    nrRooms:{
        type:Number,
        required : true
    },
    postalCode:{
        type:Number,
        required : true
    },
    author:{
        type:String
    },
    image:{
        type:String
    },
    auctiontype:{
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