const express = require('express');
const morgan = require('morgan');
const swaggerUI = require('swagger-ui-express');
const YAML = require('yamljs');
const OpenApiValidator = require('express-openapi-validator');
var path = require('path');
var swagger_path =  path.resolve(__dirname,'./../swagger.yaml');
const swaggerDoc = YAML.load(swagger_path);



const applyMiddleware = (app) => {
	console.log(swagger_path)
	app.use(express.json());
	app.use(morgan('dev'));
	app.use('/docs', swaggerUI.serve, swaggerUI.setup(swaggerDoc));
	// app.use(
	// 	OpenApiValidator.middleware({
	// 		apiSpec: './swagger.yaml',
	// 	})
	// );
};

module.exports = applyMiddleware;