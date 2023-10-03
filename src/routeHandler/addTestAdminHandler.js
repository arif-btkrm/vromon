const User = require("./../models/userModel");
const bcrypt = require('bcrypt');

const addTestAdminHandler = async (_req,res) => {
    password = "12345"
    const encPass = await bcrypt.hash(password, 5);
    const userData = {
        Name : "Test Admin",
        phone : "11111111111",
        email : "admin@test.com",
        password : encPass,
        role : "65019ac3d7cef2f959a6bcb7"
    }
    //    console.log(userData)
    const newUser = new User(userData);

    await newUser.save()
    .then(()=>{
        res.status(201).json({
            message : "SignUp Successful"
        });
    })
    .catch(()=>{
        res.status(500).json({
            error : "SignUp Failed"
        })
    })
};

module.exports = {addTestAdminHandler};