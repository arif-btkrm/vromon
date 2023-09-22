const unknownRouteHandler = (_req,res)=>{
    res.status(404).json({status : 'OK', message: 'Rosourse Not Found'});
};
module.exports = unknownRouteHandler;