const router = require('express').Router();

const healthHandler = require('./routeHandler/healthHandler');
const homeHandler = require('./routeHandler/homeHandler');
const {addVehicleHandler,getVehicleHandler} = require('./routeHandler/vehicleHandler');
const busHandler = require('./routeHandler/busHandler');
const busRootHandler = require('./routeHandler/busRootHandler');
const rootHandler = require('./routeHandler/rootHandler');
const signinHandler = require('./routeHandler/signinHandler');
const signupHandler = require('./routeHandler/signupHandler');
const tickethHandler = require('./routeHandler/tickethHandler');

// Health Check
router.get('/health', healthHandler);

// Home Route
router.get('/', homeHandler);

// Get List of vehicle Type
router.get('/vehicle', getVehicleHandler);

// Add a vehicle Type
router.post('/vehicle', addVehicleHandler);


// Get List of All Buses
router.get('/bus', busHandler);

// Get available root of a specific Bus
router.get('/bus/:busName', busRootHandler); 


// Get List of available bus of a specific root
router.get('/root', rootHandler); // will take 2 query peram 

// User Signin or login
router.post('/user/signin', signinHandler);

// User SignUp of Regester
router.post('/user/signup', signupHandler);

// Get List of Tickets of a User
router.get('/user/ticket', tickethHandler);

module.exports = router;