module.exports = function (column) {
    switch (column['DATA_TYPE']) {
        case "nvarchar":
            return "DataTypes.STRING(" + column['CHARACTER_MAXIMUM_LENGTH'] + ")";
        case "varchar":
            return "DataTypes.STRING(" + column['CHARACTER_MAXIMUM_LENGTH'] + ")";
        case "char":
            return "DataTypes.STRING(" + column['CHARACTER_MAXIMUM_LENGTH'] + ")";
        case "bigint":
            return "DataTypes.BIGINT";
        case "decimal":
            return "DataTypes.DECIMAL(18,2)";
        case "smallint":
            return "DataTypes.INTEGER";
        case "timestamp":
            return "DataTypes.STRING";
        case "tinyint":
            return "DataTypes.INTEGER";
        case "int":
            return "DataTypes.INTEGER";
        case "datetime":
            return "DataTypes.DATE";
        case "smalldatetime":
            return "DataTypes.DATE";
        case "text":
            return "DataTypes.STRING";
        case "ntext":
            return "DataTypes.TEXT";
        case "varbinary":
            return "DataTypes.STRING.BINARY";
        case "image":
            return "DataTypes.BLOB";
        case "bit":
            return "DataTypes.BOOLEAN";
        case "geography":
            return "DataTypes.STRING";
        case "time":
            return "DataTypes.DATE";
        case "uniqueidentifier":
            return "DataTypes.STRING";
        case "nchar":
            return "DataTypes.STRING(" + column['CHARACTER_MAXIMUM_LENGTH'] + ")";
        case "xml":
            return "DataTypes.STRING";
        default:
            throw new Error('Oops! please add proper datatype for "' + column['DATA_TYPE'] + ' in ' + __filename);
    }
};