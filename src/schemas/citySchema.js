const mongoose = require('mongoose');

const citySchema = mongoose.Schema({
    cityName :{
        type :  String,
        require: true
    },
    cityText :{
        type :  String,
        require: true
    },
    status :{
        type : String,
        enum : ["active", "inactive"],
        default: 'active'
    }
});

module.exports = citySchema;