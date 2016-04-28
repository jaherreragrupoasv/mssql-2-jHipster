'use strict';

var db2sequelize = require('./libJHipster');

var config = {
	server: 'srvimportas400',
	userName: 'jaherrera',
	password: 'jahs',
	database: 'db_jhas400',
};

var filepath = 'OUT/jHipster';

db2sequelize(config, filepath, function (err) {
	if (err) {
		console.log(err);
	} else {
		console.log("Generation finished!.");
	}
});
