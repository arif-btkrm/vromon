
const User = require("./../models/userModel");
const {validationResult} = require('express-validator')

const JWT = require('jsonwebtoken');
const {generateHash,hashMatched} = require ('./../utils/hashing')

const signInHandler = (_req,res) => {
  
    const Email = _req.body.email;
    const PassWord = _req.body.password;
     User.find({email:Email,status:"active"})
    .populate('userRole')
    .then( (userData) => {
        //console.log(userData[0].userRole.roleName);
        if(userData.length>0){
           // console.log(userData[0].password)
           // const checkedPassword = await bcrypt.compare(PassWord,userData[0].password); // need to use hash from util folder
           const checkedPassword = hashMatched(PassWord,userData[0].password); // need to be tested
           
           // console.log(checkedPassword)
            if(checkedPassword){
               // console.log("Password Matched")
                const token = JWT.sign({
                    userName :userData[0].name,
                    userId : userData[0]._id,
                    userRole : userData[0].userRole.roleName
                },process.env.JWT_KEY, {expiresIn : "1h"})
                res.status(200).json({
                    JWT : token,
                    message : "Successful"
                })
            }else{
                res.status(401).json({
                    message : "Wrong Password"
                })
            }
        }
        else{
            res.status(401).json({
                message : "User Not Found"
            })    
        }
    })
    .catch((err) => {
        res.status(500).json({
            error : err,
            message : "Server Error"
        })
    })
};


const signUpHandler = async (_req,res) => {
       
   // const encPass = await bcrypt.hash(_req.body.password, 10); // need to use hash from util folder
   const encPass = await generateHash(_req.body.password, 10); // need to be tested
    
   const userData = {
        Name : _req.body.name,
        phone : _req.body.phone,
        email : _req.body.email,
        password : encPass,
    }
        console.log(userData)
    const newUser = new User(userData);

    await newUser.save()
    .then(()=>{
        res.status(201).json({
            message : "SignUp Successful"
        });
    })
    .catch((err)=>{
        console.log(err)
        res.status(500).json({
            error : "SignUp Failed"
        })
    })
};

module.exports = {signInHandler,signUpHandler};