const mongoose = require('mongoose');

const vehicleSchema = mongoose.Schema({
    vehicleName :{
        type :  String,
        require: true
    },
    vehicleType :{
        type :  String,
        require: true
    },
        status :{
        type : String,
        enum : ["active", "inactive"]
    }
});

module.exports = vehicleSchema;