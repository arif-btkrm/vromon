const mongoose = require('mongoose');

const connectDB =  async ()=>{
	let connectionURL = process.env.DB_CONNECTION_URL;
	connectionURL = `${connectionURL}/${process.env.DB_NAME}`
	
	await mongoose.connect(connectionURL,{
	useUnifiedTopology:true
	})
	.then(()=>console.log("MongoDB Connection Successful"))
	.catch((err)=>console.log(err))

}
module.exports = {connectDB};
