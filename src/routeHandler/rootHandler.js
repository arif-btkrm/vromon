const Root = require("./../models/rootModel");

const getRootHandler = (_req,res) => {
    console.log(_req);
    Root.find()
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


const addRootHandler = (_req,res) => {
    const data = _req.body;
//    console.log(data)
    const newRoot = new Root(data);
    newRoot.save()
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

module.exports = {getRootHandler,addRootHandler};