
const Role = require("./../models/roleModel");

const getRoleHandler = (_req,res) => {
    Role.find({status : "active"})
    .then((data) => {
        res.status(200).json({
            result : data,
        })
    })
    .catch((err) => {
        res.status(500).json({
            error : err
        })
    })
};


const addRoleHandler = (_req,res) => {
    const data = _req.body;
//    console.log(data)
    const newRole = new Role(data);
    newRole.save()
    .then(()=>{
        res.status(200).json({
            message : "Data Inserted Successfully"
        });
    })
    .catch(()=>{
        res.status(500).json({
            error : "Data not Inserted"
        })
    })
};

module.exports = {getRoleHandler,addRoleHandler};