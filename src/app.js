const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const router = require('./routes');
const path = require('path')

const app = express();

//const port = process.env.PORT || 4000;


app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(router);
app.use(express.static(path.join(__dirname,'src')));

 
// app.listen(port,()=>{
//     console.log(`Server is listening on PORT ${port}`);
//     console.log(`localhost: ${port}`);
// })

module.exports = app;