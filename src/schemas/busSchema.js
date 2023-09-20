const mongoose = require('mongoose');

const busSchema = mongoose.Schema({
    busName :{
        type :  String,
        require: true
    },
    seat :{
        type : Number,
    },
    vehicleType :{
        type : mongoose.Types.ObjectId,
        ref: "Vehicle",
        require: true
    },
    busRoot : [{
        type : mongoose.Types.ObjectId,
        ref: "Root",
        require: true
    }]
});

module.exports = busSchema;