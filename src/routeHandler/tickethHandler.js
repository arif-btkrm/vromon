
const Ticket = require("./../models/ticketModel");

const getTicketHandler = (_req,res) => {
    const userId = _req.userId;
    Ticket.find({clientId : userId})
    .populate('clientId rootId busId')
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

const deleteTicketHandler = (_req,res) => {
    const userId = _req.userId;
    const ticketId = _req.query.id;
    Ticket.findOne({_id : ticketId})
    
    .then((data) => {
        if( data.clientId == userId ){
            Ticket.deleteOne({_id : ticketId})
            .then((result)=>{
                console.log(result)          
            res.status(200).json({
                message : "Delete Successful"
            })
            })
        } else{
            res.status(500).json({
                error : "Un Authorized Access"
            })
        }
      
    })
    .catch((err) => {
        res.status(500).json({
            error : err
        })
    })
};

const addTicketHandler = (_req,res) => {
    const data = _req.body;
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

module.exports = {getTicketHandler,addTicketHandler,deleteTicketHandler};