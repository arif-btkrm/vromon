const mongoose = require('mongoose');
const rootSchema = require('./../schemas/rootSchema');

const Root = new mongoose.model("Root", rootSchema);

module.exports = Root;