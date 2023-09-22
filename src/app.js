const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const router = require('./routes');

const app = express();

//const port = process.env.PORT || 4000;


app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(router);

 
// app.listen(port,()=>{
//     console.log(`Server is listening on PORT ${port}`);
//     console.log(`localhost: ${port}`);
// })

module.exports = app;