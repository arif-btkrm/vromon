const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    Name :{
        type :  String,
        require: true
    },
    phone :{
        type : String,
        require : true,
        unique: true,
        minLength : 11
    },
    email : {
        type : String,
        unique : true
    },
    password :{
        type : String,
        require : true
    },
    status :{
        type : String,
        enum : ["active", "inactive"],
        default : 'active'
    },
    ticket :[{
        type : mongoose.Types.ObjectId,
        ref: "Ticket"
    }],
    userRole : {
        type : mongoose.Types.ObjectId,
        ref: "Role",
        require: true,
        default : "65019af6d7cef2f959a6bcbb"
    },
});

module.exports = userSchema;