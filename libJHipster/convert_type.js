module.exports = function (column) {
    switch (column['DATA_TYPE']) {
        //case "nvarchar", "varchar", "char", "xml", "nchar", "uniqueidentifier", "geography", "text", "ntext", "timestamp":
        //    return "String maxlength(" + column['CHARACTER_MAXIMUM_LENGTH'] + ")";
        case "nvarchar":
            return "String maxlength(" + column['CHARACTER_MAXIMUM_LENGTH'] + ")";
        case "decimal":
            return "BigDecimal";
        //case "smallint", "tinyint", "int", "bigint":
        //    return "Integer";
        case "int":
            return "Integer";
        case "int", "bigint":
            return "Long";
        case "datetime", "smalldatetime", "time":
            return "LocalDate";
        case "datetime2":
            return "LocalDate";
        case "bit":
            return "boolean";
        default:
            throw new Error('Oops! please add proper datatype for "' + column['DATA_TYPE'] + ' in ' + __filename);
    }
};