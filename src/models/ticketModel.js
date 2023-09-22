const mongoose = require('mongoose');
const ticketSchema = require('./../schemas/ticketSchema');

const Ticket = new mongoose.model("Ticket", ticketSchema);

module.exports = Ticket;