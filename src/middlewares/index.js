const express = require('express');
const morgan = require('morgan');
const OpenApiValidator = require('express-openapi-validator');


const applyMiddleware = (app) => {
	app.use(express.json());
	app.use(morgan('dev'));
	app.use('/docs', swaggerUI.serve, swaggerUI.setup(swaggerDoc));
	app.use(
		OpenApiValidator.middleware({
			apiSpec: './swagger.yaml',
		})
	);
};

module.exports = applyMiddleware;