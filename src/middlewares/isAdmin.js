
const isAdmin = (req,res,next)=>{
    try{
        const userRole = req.userRole;
       // console.log(userRole)
        if(userRole == "Admin"){
            next()
        }
        else{
            res.status(401).json({ //status Code need to be checked
                message : "Unautorized Access"
            })  
        }
    }
    catch{
        next("Authentication Failed");
    }
}

module.exports = isAdmin;