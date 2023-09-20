
const Bus = require("./../models/busModel");

const getBusHandler = (_req,res) => {
    Bus.find()
    .populate("vehicleType", "vehicleType")
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


const addBusHandler = (_req,res) => {
    const data = _req.body;
//    console.log(data)
    const newBus = new Bus(data);
    newBus.save()
    .then(()=>{
        res.status(200).json({
            message : "Data Inserted Successfully"
        });
    })
    .catch(()=>{
        res.status(500).json({
            error : "Data not Inserted"
        })
    })
};

module.exports = {getBusHandler,addBusHandler};