
const Ticket = require("./../models/ticketModel");

const getTicketHandler = (_req,res) => {
    Ticket.find({status : "active"})
    .then((data) => {
        res.status(200).json({
            result : data,
        })
    })
    .catch((err) => {
        res.status(500).json({
            error : err
        })
    })
};


const addTicketHandler = (_req,res) => {
    const data = _req.body;
    console.log(data)
    const newTicket = new Ticket(data);
    newTicket.save()
    .then(()=>{
        res.status(200).json({
            message : "Ticket Booked Successfully"
        });
    })
    .catch(()=>{
        res.status(500).json({
            error : "Mission Failed"
        })
    })
};

module.exports = {getTicketHandler,addTicketHandler};