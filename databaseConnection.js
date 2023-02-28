const mysql = require('mysql2/promise');

const is_qoddi = process.env.IS_QODDI || false;

const dbConfigQoddi = {
	host: "sql.freedb.tech",
	user: "freedb_ 2350_main.",
	password: "Dr*RW6#5b%&u6Cf",
	database: "freedb_comp2350-week2-A01325043",
	multipleStatements: false,
	namedPlaceholders: true
};

const dbConfigLocal = {
	host: "localhost",
	user: "root",
	password: "Zxx53625140@",
	database: "restaurant_review",
	multipleStatements: false,
	namedPlaceholders: true

};

if (is_qoddi) {
	var database = mysql.createPool(dbConfigQoddi);
}
else {
	var database = mysql.createPool(dbConfigLocal);
}

module.exports = database;
		
