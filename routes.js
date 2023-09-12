const router = require('express').Router();
const healthHandler = require('./routeHandler/healthHandler');

router.get('/health', healthHandler);

module.exports = router;