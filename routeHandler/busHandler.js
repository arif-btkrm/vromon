const busHandler =( _req,res)=>{
    res.status(200).json({status : 'OK', message: 'This is busHandler  Route'});
};
module.exports = busHandler;