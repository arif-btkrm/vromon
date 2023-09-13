const vehicleHandler = (_req,res)=>{
    res.status(200).json({status : 'OK', message: 'This is vehicleHandler  Route'});
};
module.exports = vehicleHandler;