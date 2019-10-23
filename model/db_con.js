var mysql = require('mysql');

var connection = mysql.createConnection({
	database: 'myDatabase',
	user: 'myUser',
	host: "00.00.000.000",
	password: 'myPwd',
	port: '8080'
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

module.exports = connection
