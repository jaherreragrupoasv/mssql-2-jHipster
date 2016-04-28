var convert_type = require('./convert_type');
var convert_nullable = require('./convert_nullable');

module.exports = function sequelize_routes(schema) {
    var output = [];

    var table = schema.table;

    output.push("var Obj = require('../models/index');");
    output.push("\tmodule.exports = function(app) {");
    output.push("\t");
    output.push("\t////////////////////////////////");
    output.push("\t// " + table);
    output.push("\t////////////////////////////////");

    output.push("\t");
    output.push("\t////////////////////////////////");
    output.push("\t// TODOS");
    output.push("\t");

    output.push("\tapp.get('/api/private/" + table + "', function(req, res) {");
    output.push("\tObj." + table + ".findAll({");
    //attributes: ['codigo', 'nombre', 'dni','email']
    output.push("\t}).then(function(data){");
    output.push("\tres.json(data);");
    output.push("\t});");
    output.push("\t});");

    output.push("\t");
    output.push("\t////////////////////////////////");
    output.push("\t// NUEVO");
    output.push("\t");

    output.push("\tapp.post('/api/private/new" + table + "', function(req, res) {");
    output.push("\tObj." + table + ".create({\t");

    for (var i = 0; i < schema.columns.length; i++) {
        var colName = schema.columns[i].colName;

        if (i !== schema.columns.length - 1) {
            output.push(colName + ": req.body." + colName + ",");
        }
        else {
            output.push(colName + ": req.body." + colName);
        }
    }

    output.push("\t}).then(function(data){");
    output.push("\tres.json(data.dataValues);");
    output.push("\t}).catch(function(error){");
    output.push("res.status(500).json({ error: 'error' });");
    output.push("\t});");
    output.push("\t});");

    output.push("\t");
    output.push("\t////////////////////////////////");
    output.push("\t// ACTUALIZAR");
    output.push("\t");

    output.push("\tapp.post('/api/private/modify" + table + "', function(req, res) {");
    output.push("\tObj." + table + ".update({\t");

    for (var i = 0; i < schema.columns.length; i++) {
        var colName = schema.columns[i].colName;

        if (!schema.pk.hasOwnProperty(colName)) {
            if (i !== schema.columns.length - 1) {
                output.push(colName + ": req.body." + colName + ",");
            }
            else {
                output.push(colName + ": req.body." + colName);
            }
        }
    }
    output.push("\t}");
    output.push("\t,");

    output.push("{where: {");

    var n = 0;

    for (var i = 0; i < schema.columns.length; i++) {
        var colName = schema.columns[i].colName;

        if (schema.pk.hasOwnProperty(colName)) {
            n = n + 1;

            if (n = 1) {
                output.push(colName + ": req.body." + colName);
            }
            else {
                output.push("," + colName + ": req.body." + colName);
            }
        }
    }
    output.push("}");

    output.push("\t}).then(function(data){");
    output.push("\tres.json(data.dataValues);");
    output.push("\t}).catch(function(error){");
    output.push("res.status(500).json({ error: 'error' });");
    output.push("\t});");
    output.push("\t});");


    output.push("\t");
    output.push("\t////////////////////////////////");
    output.push("\t// BORRAR");
    output.push("\t");

    output.push("\tapp.delete('/api/private/delete" + table + "', function(req, res) {");
    output.push("\tObj." + table + ".remove({\t");

    n = 0;

    for (var i = 0; i < schema.columns.length; i++) {
        var colName = schema.columns[i].colName;

        if (schema.pk.hasOwnProperty(colName)) {
            n = n + 1;

            if (n = 1) {
                output.push(colName + ": req.body." + colName);
            }
            else {
                output.push("," + colName + ": req.body." + colName);
            }
        }
    }
    output.push("},function (err, item) {");
    output.push("if (err)");
    output.push("res.send(err);");
    output.push("});");
    output.push("});");

    output.push("\t};");

    //output.push("\treturn sequelize.define('" + schema.table + "', {");
    //
    //for (var i = 0; i < schema.columns.length; i++) {
    //	var colName = schema.columns[i].colName;
    //
    //	output.push("\t\t" + colName + ": {");
    //
    //	output.push("\t\t\ttype: " + convert_type(schema.columns[i].columns) + ",");
    //
    //	if (schema.pk.hasOwnProperty(colName)) {
    //		output.push("\t\t\tprimaryKey: true,");
    //	}
    //
    //	output.push("\t\t\tallowNull: " + convert_nullable(schema.columns[i].columns));
    //
    //	if (i !== schema.columns.length - 1) {
    //		output.push("\t\t},");
    //	} else {
    //		output.push("\t\t}");
    //	}
    //
    //	// TABLE_CATALOG// TABLE_SCHEMA// TABLE_NAME// COLUMN_NAME// ORDINAL_POSITION// COLUMN_DEFAULT// IS_NULLABLE
    //	// DATA_TYPE// CHARACTER_MAXIMUM_LENGTH// CHARACTER_OCTET_LENGTH// NUMERIC_PRECISION// NUMERIC_PRECISION_RADIX
    //	// NUMERIC_SCALE// DATETIME_PRECISION// CHARACTER_SET_CATALOG// CHARACTER_SET_SCHEMA// CHARACTER_SET_NAME
    //	// COLLATION_CATALOG// COLLATION_SCHEMA// COLLATION_NAME// DOMAIN_CATALOG// DOMAIN_SCHEMA// DOMAIN_NAME
    //
    //}
    //
    //output.push("\t}, {");
    //output.push("\t\tfreezeTableName: true,");
    //output.push("\t\tcreatedAt: false,");
    //output.push("\t\tupdatedAt: false");
    //output.push("\t});");
    //output.push("};");

    return output.join("\n");
};