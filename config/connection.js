const mysql = require("mysql");
const jawsDB = require("./heroku")

// const connection = mysql.createConnection({
//   host: "localhost",
//   port: 3306,
//   user: "root",
//   password: "",
//   database: "burgers_db"
// });

const connection = mysql.createConnection({
  host: jawsDB.host,
  port: jawsDB.port,
  user: jawsDB.user,
  password: jawsDB.password,
  database: jawsDB.database
});

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

module.exports = connection;