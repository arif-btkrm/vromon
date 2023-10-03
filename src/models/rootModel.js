const mongoose = require('mongoose');
const rootSchema = require('./../schemas/rootSchema');

const Root = new mongoose.model("Root2", rootSchema);

module.exports = Root;