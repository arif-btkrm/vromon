
const User = require("./../models/userModel");
const bcrypt = require('bcrypt');

const signInHandler = (_req,res) => {
    const Email = _req.body.email;
    const PassWord = _req.body.password;
     User.find({email:Email,status:"active"})
    .then( async (data) => {
        if(data.length>0){
           // console.log(data[0].password)
            const checkedPassword = await bcrypt.compare(PassWord,data[0].password);
           // console.log(checkedPassword)
            if(checkedPassword){
                console.log("Password Matched")
                res.status(200).json({
                    result : data,
                })
            }else{
                res.status(500).json({
                    message : "Wrong Password"
                })
            }
        }
        else{
            res.status(500).json({
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
       
    const encPass = await bcrypt.hash(_req.body.password, 5);
    const userData = {
        Name : _req.body.name,
        phone : _req.body.phone,
        email : _req.body.email,
        password : encPass,
    }
    //    console.log(userData)
    const newUser = new User(userData);

    await newUser.save()
    .then(()=>{
        res.status(200).json({
            message : "SignUp Successful"
        });
    })
    .catch(()=>{
        res.status(500).json({
            error : "SignUp Failed"
        })
    })
};

module.exports = {signInHandler,signUpHandler};