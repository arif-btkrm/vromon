const router = require('express').Router();

const healthHandler = require('./routeHandler/healthHandler');
const homeHandler = require('./routeHandler/homeHandler');
const {addVehicleHandler,getVehicleHandler} = require('./routeHandler/vehicleHandler');
const {addBusHandler,getBusHandler} = require('./routeHandler/busHandler');
const {addRoleHandler,getRoleHandler} = require('./routeHandler/roleHandler');
const busRootHandler = require('./routeHandler/busRootHandler');
const {addRootHandler,getRootHandler} = require('./routeHandler/rootHandler');
const {signInHandler,signUpHandler} = require('./routeHandler/userHandler');

const tickethHandler = require('./routeHandler/tickethHandler');
const {addCityHandler,getCityHandler} = require('./routeHandler/cityHandler');

const isLoggedIn =require('./middlewares/isLoggedIn');
const isAdmin =require('./middlewares/isAdmin');


// Health Check
router.get('/health', healthHandler);

// Home Route
router.get('/', homeHandler);

// Get List of vehicle Type
router.get('/vehicle', getVehicleHandler);

// Add a vehicle Type
router.post('/vehicle',isLoggedIn, isAdmin, addVehicleHandler); // add midleware to check role


// Get List of All Buses
router.get('/bus', getBusHandler);
router.post('/bus', isLoggedIn,isAdmin, addBusHandler); //only for admin


// Get available root of a specific Bus
router.get('/bus/:id', busRootHandler); 


// Get List of available bus of a specific root
 router.get('/root', getRootHandler); // will take 2 query peram 
 router.post('/root', isLoggedIn, isLoggedIn, addRootHandler) // only Admin 

// User Signin or login
router.post('/user/signin', signInHandler);

// User SignUp of Regester
router.post('/user/signup', signUpHandler);

// Get List of Tickets of a User
router.get('/user/ticket', isLoggedIn,tickethHandler);

// manage role only admin can use this
router.get('/user/role', isLoggedIn,isAdmin, getRoleHandler); // midleware need to check is admin or not
router.post('/user/role', isLoggedIn, addRoleHandler); // midleware need to check is admin or not

// manage role only admin can use this
router.get('/city', isLoggedIn,isAdmin, getCityHandler); // midleware need to check is admin or not
router.post('/city', isLoggedIn, isAdmin, addCityHandler); // midleware need to check is admin or not



module.exports = router;