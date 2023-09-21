const JWT = require('jsonwebtoken');

const isLoggedIn = (req,res,next)=>{
    try{
        const authorization = req.headers.authorization;
        const token = authorization.split(' ')[1];
        const decoded = JWT.verify(token, process.env.JWT_KEY);
        const {userName, userId, userRole} = decoded;
        req.userName = userName;
        req.userId = userId;
        req.userRole = userRole;
        next()
    }
    catch{
        next("Authentication Failed");
    }
}

module.exports = isLoggedIn;