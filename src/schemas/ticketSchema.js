const mongoose = require('mongoose');

const ticketSchema = mongoose.Schema({
     
    clientId : {
        type : mongoose.Types.ObjectId,
        ref: "User",
        require: true,
    },
    rootId : {
        type : mongoose.Types.ObjectId,
        ref: "Root",
        require: true,
    },
    busId : {
        type : mongoose.Types.ObjectId,
        ref: "Bus",
        require: true,
    },
    
    date : {
        type: Date,
        default : Date.now
    },
    quantity :{
        type : Number,
        require : true,
        default : 1
    },
    
    totalPrice : {
        type : Number,
        require : true,
        default : 0
    }
});

module.exports = ticketSchema;