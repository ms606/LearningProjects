let mysql = require('mysql');

let connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "hydroponic"
});

module.exports = connection;
