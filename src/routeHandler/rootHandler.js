const Root = require("./../models/rootModel");
const City = require("./../models/cityModel");

const getRootHandler = async (_req,res) => {
    
   const from = _req.query.from;
   const to = _req.query.to;
   console.log(to)
    if(from && to){
        console.log(from)
        console.log(to)
        if(from == '' || to ==''){ // Simple validation will be changed later
             res.status(500).json({
                 message : " request with Empty Value"
             }).end();
        }
    } 
    else{
        res.status(500).json({
            message : "Incorrect Request"
        }).end();
    }
    

   
   const loc1 = await City.find({cityText : from});
   const loc2 = await City.find({cityText : to});
   let loc1Id, loc2Id;
   if(loc1.length>0 && loc2.length>0){
       console.log(loc1)
       console.log(loc2)
       loc1Id = loc1[0]._id;
       loc2Id = loc2[0]._id;
   }
   else{
    res.status(201).json({
        message : "Root is not available"
    })
   }
  
   
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
        res.status(201).json({
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