const mongoose = require('mongoose');

const rootSchema = mongoose.Schema({
    location1 :{
        type : mongoose.Types.ObjectId,
        ref: "City",
        require: true
    },
    location2 :{
        type : mongoose.Types.ObjectId,
        ref: "City",
        require: true
    },
    bus : [{
        type : mongoose.Types.ObjectId,
        ref: "Bus"
    }],
    status :{
        type : String,
        enum : ["active", "inactive"],
        default: 'active'
    }
    
});

module.exports = rootSchema;