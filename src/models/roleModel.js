const mongoose = require('mongoose');
const roleSchema = require('./../schemas/roleSchema');

const Role = new mongoose.model("Role2", roleSchema);

module.exports = Role;