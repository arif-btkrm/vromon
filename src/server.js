const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const router = require('./routes');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

const app = express();

dotenv.config();

mongoose.connect("mongodb://127.0.0.1:27017/vromon",{
    useUnifiedTopology:true
})
.then(()=>console.log("Connection Successful"))
.catch((err)=>console.log(err))

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(router);



const port = process.env.PORT || 4000;

app.listen(port,()=>{
    console.log(`Server is listening on PORT ${port}`);
    console.log(`localhost: ${port}`);
})