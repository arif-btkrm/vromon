const router = require('express').Router();
const healthHandler = require('./routeHandler/healthHandler');

// Health Check
router.get('/health', healthHandler);

router.get('/', homeHandler);

router.get('/vehicle', vhicleHandler);

router.get('/bus', busHandler);

router.get('/health', healthHandler);

router.get('/health', healthHandler);

router.get('/health', healthHandler);

router.get('/health', healthHandler);


module.exports = router;