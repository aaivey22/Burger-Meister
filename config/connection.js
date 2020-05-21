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
  host: "qn66usrj1lwdk1cc.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
  port: 3306,
  user: "eiww1u37um4hriye",
  password: "ve00xmv1twxg47cm",
  database: "pi97p3s8xzlisdax"
});

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

module.exports = connection;