const rootHandler = (_req,res)=>{
    res.status(200).json({status : 'OK', message: 'This is rootHandler  Route'});
};
module.exports = rootHandler;