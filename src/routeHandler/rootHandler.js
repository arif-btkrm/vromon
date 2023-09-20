const Root = require("./../models/rootModel");
const City = require("./../models/cityModel");

const getRootHandler = async (_req,res) => {
    
   const from = _req.query.from;
   const to = _req.query.to;

   const loc1 = await City.find({cityText : from});
   const loc1Id = loc1[0]._id;
   const loc2 = await City.find({cityText : to});
   const loc2Id = loc2[0]._id;
   
  
   console.log("Location1 Id : "+ loc1Id);
   console.log("Location2 Id : "+ loc2Id);
  
   Root.find({$or: [{location1 : loc1Id, location2 : loc2Id},{location1 : loc2Id, location2 : loc1Id}]})
    .populate('location1 location2 bus')
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
  // console.log(data)
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