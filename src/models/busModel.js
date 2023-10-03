const mongoose = require('mongoose');
const busSchema = require('./../schemas/busSchema');

const Bus = new mongoose.model("Bus2", busSchema);

module.exports = Bus;