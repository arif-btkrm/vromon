const Vehicle = require("./../models/vehicleModel");

const getVehicleHandler = (_req,res) => {
    Vehicle.find({status : "active"})
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


const addVehicleHandler = (_req,res) => {
    const data = _req.body;
//    console.log(data)
    const newVehicle = new Vehicle(data);
    newVehicle.save()
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

module.exports = {getVehicleHandler,addVehicleHandler};