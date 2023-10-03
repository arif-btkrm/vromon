const dotenv = require('dotenv');
const http = require('http');
const app = require('./app');
const { connectDB } = require('./db/connectDB')
const remoteDB = require('./db/serverDB')

dotenv.config();

const server = http.createServer(app);
const port = process.env.PORT || 4000;

const main = async () => {
    try {
      await connectDB();
    //  await remoteDB();
      server.listen(port, async () => {
        console.log(`Server is Running at http://localhost:${port}`);
      });
    } catch (e) {
      console.log('Database Error');
      console.log(e);
    }
  };
  
  main();