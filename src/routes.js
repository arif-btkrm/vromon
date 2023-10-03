const router = require('express').Router();

const healthHandler = require('./routeHandler/healthHandler');
const homeHandler = require('./routeHandler/homeHandler');
const {addVehicleHandler,getVehicleHandler} = require('./routeHandler/vehicleHandler');
const {addBusHandler,getBusHandler} = require('./routeHandler/busHandler');
const {addRoleHandler,getRoleHandler} = require('./routeHandler/roleHandler');
const {getBusRootHandler} = require('./routeHandler/busRootHandler');
const {addRootHandler,getRootHandler} = require('./routeHandler/rootHandler');
const {signInHandler,signUpHandler} = require('./routeHandler/userHandler');
const {addTestAdminHandler} = require('./routeHandler/addTestAdminHandler');

const {addTicketHandler,getTicketHandler,deleteTicketHandler} = require('./routeHandler/ticketHandler');
const {addCityHandler,getCityHandler} = require('./routeHandler/cityHandler');
const unknownRoute = require('./routeHandler/unknownRouteHandler')

const isLoggedIn =require('./middlewares/isLoggedIn');
const isAdmin =require('./middlewares/isAdmin');

const isValidate = require('./middlewares/validation/validate')

const {signInValidation,
    signUpValidation,
    addBusValidation,
    addTicketValidation,
    addCityValidation,
    addVehicleValidation,
    addRoleValidation
} = require('./middlewares/validation')


// Health Check
router.get('/health', healthHandler);

// Home Route
router.get('/', homeHandler);

// Get List of vehicle Type
router.get('/api/v1/vehicle', getVehicleHandler);

// Add a vehicle Type
router.post('/api/v1/vehicle',addVehicleValidation,isValidate, isLoggedIn, isAdmin, addVehicleHandler); // add midleware to check role


// Get List of All Buses
router.get('/api/v1/bus', getBusHandler);
router.post('/api/v1/bus', addBusValidation, isValidate, isLoggedIn,isAdmin, addBusHandler); //only for admin


// Get available root of a specific Bus
router.get('/api/v1/bus/:id', getBusRootHandler); 


// Get List of available bus of a specific root
 router.get('/api/v1/root', getRootHandler); // will take 2 query peram 
 router.post('/api/v1/root', isLoggedIn, isAdmin, addRootHandler) // only Admin 

// User Signin or login
router.post('/api/v1/user/signin', signInValidation, isValidate, signInHandler);

// User SignUp of Regester
router.post('/api/v1/user/signup', signUpValidation, isValidate, signUpHandler);
router.post('/api/v1/user/addtestadmin', addTestAdminHandler); // think  about it later

// Get List of Tickets of a User
router.get('/api/v1/ticket', isLoggedIn,getTicketHandler);
router.post('/api/v1/ticket', addTicketValidation, isValidate, isLoggedIn,addTicketHandler);
router.delete('/api/v1/ticket', isLoggedIn,deleteTicketHandler);



// manage role only admin can use this
router.get('/api/v1/user/role', isLoggedIn,isAdmin, getRoleHandler); // midleware need to check is admin or not
router.post('/api/v1/user/role',addRoleValidation,isValidate, isLoggedIn, addRoleHandler); // midleware need to check is admin or not

// manage role only admin can use this
router.get('/api/v1/city', isLoggedIn,isAdmin, getCityHandler); // midleware need to check is admin or not
router.post('/api/v1/city', addCityValidation, isValidate, isLoggedIn, isAdmin, addCityHandler); // midleware need to check is admin or not

// Handle Unknown Route
router.all('*', unknownRoute);

module.exports = router;