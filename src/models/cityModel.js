const mongoose = require('mongoose');
const citySchema = require('./../schemas/citySchema');

const City = new mongoose.model("City2", citySchema);

module.exports = City;