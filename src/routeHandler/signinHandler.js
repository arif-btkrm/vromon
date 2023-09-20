const signinHandler = (_req,res)=>{
    res.status(200).json({status : 'OK', message: 'This is signinHandler  Route'});
};
module.exports = signinHandler;