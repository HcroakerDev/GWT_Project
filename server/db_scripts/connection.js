/**
 * A module used to create a mysql database connection
 * 
 * @exports connection
 */
var mysql = require('mysql');

//local mysql db connection
var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'abc123456',
    database : 'gwt_db'
});

// Connect to db
connection.connect(function(err) {
    // In a real world application, if the connection was unsuccessful, we would connect to a backup database. 
    if (err) throw err;
});

module.exports = connection;