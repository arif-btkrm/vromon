const mongoose = require('mongoose');
const userSchema = require('./../schemas/userSchema');

const User = new mongoose.model("User2", userSchema);

module.exports = User;