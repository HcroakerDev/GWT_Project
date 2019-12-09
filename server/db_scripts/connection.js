var mysql = require('mysql');

//local mysql db connection
var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'abc123456',
    database : 'gwt_db'
});

connection.connect(function(err) {
    if (err) throw err;
});

module.exports = connection;