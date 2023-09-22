
const City = require("./../models/cityModel");

const getCityHandler = (_req,res) => {
    City.find({status : "active"})
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


const addCityHandler = (_req,res) => {
    const data = _req.body;
//    console.log(data)
    const newCity = new City(data);
    newCity.save()
    .then(()=>{
        res.status(201).json({
            message : "Data Inserted Successfully"
        });
    })
    .catch(()=>{
        res.status(500).json({
            error : "Data not Inserted"
        })
    })
};

module.exports = {getCityHandler,addCityHandler};