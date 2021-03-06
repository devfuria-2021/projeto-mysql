const mysql = require('mysql');

function consulta(callback) {
  
  const connection = mysql.createConnection({
    host     : '127.0.0.2',
    user     : 'root',
    password : '',
    database : 'mysql'
  });

  connection.connect();

  connection.query('SELECT * FROM `global_grants`', function (error, results, fields) {
    if (error) throw error;
    // console.log(results);
    callback(results);
  });

  connection.end();
}

module.exports = consulta;