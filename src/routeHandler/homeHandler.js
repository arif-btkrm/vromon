const homeHandler =  (_req,res)=>{
    res.status(200).json({status : 'OK', message: 'This is Home  Route'});
};
module.exports = homeHandler;