'use strict';

var db2sequelize = require('./libSequelize');

var config = {
	server: 'localhost',
	userName: 'sa',
	password: 'H34ps',
	database: 'AdventureWorks2012',
};

var filepath = 'OUT/Sequelize';

db2sequelize(config, filepath, function (err) {
	if (err) {
		console.log(err);
	} else {
		console.log("Generation finished!");
	}
});
