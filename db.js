const mysql = require("mysql2");
const { 
  host, 
  user, 
  password, 
  database, 
} = require("./config");

var con = mysql.createConnection({
    host: host,
    user: user,
    password: password,
    database: database,
  });

module.exports = {
  con
};