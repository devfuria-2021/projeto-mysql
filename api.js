const mysql = require('mysql');

function consulta(config, param, callback) {
  const connection = mysql.createConnection(config);

  connection.connect();

  connection.query('SELECT * FROM `help_relation` WHERE help_topic_id =?', param, function (error, results, fields) {
    if (error) throw error;
    // console.log('The solution is: ', results);
    callback(results);
  });

  connection.end();
}

module.exports = consulta;