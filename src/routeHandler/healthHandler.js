const healthHandler = (_req,res)=>{
    res.status(200).json({status : 'OK'});
};
module.exports = healthHandler;