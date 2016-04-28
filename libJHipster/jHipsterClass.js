var convert_type = require('./convert_type');
var convert_nullable = require('./convert_nullable');

module.exports = function jHipsterclass(schema) {
	var	output = [];

	output.push("entity " + schema.table + " {");

	for (var i = 0; i < schema.columns.length; i++) {
		var colName = schema.columns[i].colName;

		if (i !== schema.columns.length - 1) {
			output.push("" + colName.toLowerCase() + " " + convert_type(schema.columns[i].columns) + " " + convert_nullable(schema.columns[i].columns) + ",");
		} else {
			output.push("" + colName.toLowerCase() + " " + convert_type(schema.columns[i].columns) + " " + convert_nullable(schema.columns[i].columns) + "}");
		}


		//if (schema.pk.hasOwnProperty(colName)) {
		//	output.push("\t\t\tprimaryKey: true,");
		//}


		// TABLE_CATALOG// TABLE_SCHEMA// TABLE_NAME// COLUMN_NAME// ORDINAL_POSITION// COLUMN_DEFAULT// IS_NULLABLE
		// DATA_TYPE// CHARACTER_MAXIMUM_LENGTH// CHARACTER_OCTET_LENGTH// NUMERIC_PRECISION// NUMERIC_PRECISION_RADIX
		// NUMERIC_SCALE// DATETIME_PRECISION// CHARACTER_SET_CATALOG// CHARACTER_SET_SCHEMA// CHARACTER_SET_NAME
		// COLLATION_CATALOG// COLLATION_SCHEMA// COLLATION_NAME// DOMAIN_CATALOG// DOMAIN_SCHEMA// DOMAIN_NAME

	}

	return output.join("\n");
};