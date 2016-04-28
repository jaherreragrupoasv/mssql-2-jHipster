module.exports = function(sequelize, DataTypes) {
	return sequelize.define('Address', {
		AddressID: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			allowNull: false
		},
		AddressLine1: {
			type: DataTypes.STRING(60),
			allowNull: false
		},
		AddressLine2: {
			type: DataTypes.STRING(60),
			allowNull: true
		},
		City: {
			type: DataTypes.STRING(30),
			allowNull: false
		},
		StateProvinceID: {
			type: DataTypes.INTEGER,
			allowNull: false
		},
		PostalCode: {
			type: DataTypes.STRING(15),
			allowNull: false
		},
		SpatialLocation: {
			type: DataTypes.STRING,
			allowNull: true
		},
		rowguid: {
			type: DataTypes.STRING,
			allowNull: false
		},
		ModifiedDate: {
			type: DataTypes.DATE,
			allowNull: false
		}
	}, {
		freezeTableName: true,
		createdAt: false,
		updatedAt: false
	});
};