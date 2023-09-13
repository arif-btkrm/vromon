const busRootHandler = (_req,res)=>{
    res.status(200).json({status : 'OK', message: 'This is busRootHandler  Route'});
};
module.exports = busRootHandler;