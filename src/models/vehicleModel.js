const mongoose = require('mongoose');
const vehicleSchema = require('./../schemas/vehicleSchema');

const Vehicle = new mongoose.model("Vehicle2", vehicleSchema);

module.exports = Vehicle;