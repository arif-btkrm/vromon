const mongoose = require('mongoose');

const roleSchema = mongoose.Schema({
    roleName :{
        type :  String,
        require: true
    },
    status :{
        type : String,
        enum : ["active", "inactive"],
        default : "active"
    }
});

module.exports = roleSchema;