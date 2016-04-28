var Obj = require('../models/index');
	module.exports = function(app) {
	
	////////////////////////////////
	// Address
	////////////////////////////////
	
	////////////////////////////////
	// TODOS
	
	app.get('/api/private/Address', function(req, res) {
	Obj.Address.findAll({
	}).then(function(data){
	res.json(data);
	});
	});
	
	////////////////////////////////
	// NUEVO
	
	app.post('/api/private/newAddress', function(req, res) {
	Obj.Address.create({	
AddressID: req.body.AddressID,
AddressLine1: req.body.AddressLine1,
AddressLine2: req.body.AddressLine2,
City: req.body.City,
StateProvinceID: req.body.StateProvinceID,
PostalCode: req.body.PostalCode,
SpatialLocation: req.body.SpatialLocation,
rowguid: req.body.rowguid,
ModifiedDate: req.body.ModifiedDate
	}).then(function(data){
	res.json(data.dataValues);
	}).catch(function(error){
res.status(500).json({ error: 'error' });
	});
	});
	
	////////////////////////////////
	// ACTUALIZAR
	
	app.post('/api/private/modifyAddress', function(req, res) {
	Obj.Address.update({	
AddressLine1: req.body.AddressLine1,
AddressLine2: req.body.AddressLine2,
City: req.body.City,
StateProvinceID: req.body.StateProvinceID,
PostalCode: req.body.PostalCode,
SpatialLocation: req.body.SpatialLocation,
rowguid: req.body.rowguid,
ModifiedDate: req.body.ModifiedDate
	}
	,
{where: {
AddressID: req.body.AddressID
}
	}).then(function(data){
	res.json(data.dataValues);
	}).catch(function(error){
res.status(500).json({ error: 'error' });
	});
	});
	
	////////////////////////////////
	// BORRAR
	
	app.delete('/api/private/deleteAddress', function(req, res) {
	Obj.Address.remove({	
AddressID: req.body.AddressID
},function (err, item) {
if (err)
res.send(err);
});
});
	};