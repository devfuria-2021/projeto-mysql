const mysql = require('mysql');

function consulta(config, callback) {
  const connection = mysql.createConnection(config);

  connection.connect();

  connection.query('SELECT * FROM `global_grants`', function (error, results, fields) {
    if (error) throw error;
    // console.log('The solution is: ', results);
    callback(results);
  });

  connection.end();
}

module.exports = consulta;