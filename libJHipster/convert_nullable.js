module.exports = function (column) {
	switch (column['IS_NULLABLE']) {
	case "YES":
		return "required";
	case "NO":
		return "";
	default:
		return column['IS_NULLABLE'];
	}
};