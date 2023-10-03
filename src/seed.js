const dotenv = require('dotenv');

const Role = require('./models/roleModel')
const Vehicle = require('./models/vehicleModel')
const City = require('./models/cityModel')
const Bus = require('./models/busModel')
const User = require('./models/userModel')
const Root = require('./models/rootModel')

const role = require('./db/seeders/vromon.roles.json')
const vehicle = require('./db/seeders/vromon.vehicles.json')
const user = require('./db/seeders/vromon.users.json')
const city = require('./db/seeders/vromon.cities.json')
const bus = require('./db/seeders/vromon.buses.json')
const root = require('./db/seeders/vromon.roots.json')


const { connectDB } = require('./db/connectDB')

dotenv.config();


connectDB()


const deleteData = async ()=> {
    try{
        await Role.deleteMany()
        await Vehicle.deleteMany()
        await City.deleteMany()
        await Bus.deleteMany()
        await User.deleteMany()
        await Root.deleteMany()

        console.log("All Data Deleted")
    }
    catch (err){
        console.log(err)
    }
}
const importData = async ()=> {
    try{
        await Role.create(role)
        await Vehicle.create(vehicle)
        await City.create(city)
        await Bus.create(bus)
        await User.create(user)
        await Root.create(root)
        console.log("Data Inserted")
    }
    catch (err){
        console.log(err)
    }
}

const seed = async () => {
    await deleteData();
    await importData();
  }

seed()