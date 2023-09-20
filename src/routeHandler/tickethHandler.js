const tickethHandler = (_req,res)=>{
    res.status(200).json({status : 'OK', message: 'This is tickethHandler Route'});
};
module.exports = tickethHandler;