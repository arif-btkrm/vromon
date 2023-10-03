const mongoose = require('mongoose');
const vehicleSchema = require('./../schemas/vehicleSchema');

const Vehicle = new mongoose.model("Vehicle", vehicleSchema);

module.exports = Vehicle;