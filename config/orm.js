// Import MySQL connection.
const connection = require("./connection");

// Object for all our SQL statement functions.
const orm = {
    selectAll: function (tableInput, cb) {
        const queryString = `SELECT * FROM ${tableInput};`;
        connection.query(queryString, function(err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },
    insertOne: function (tableInput, columns, values, cb) {
        const queryString = `INSERT INTO ${tableInput} (${columns}) VALUES ('${values}')`;
        console.log(queryString);
        connection.query(queryString, function(err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },
    updateOne: function (tableInput, columns, values, condition, cb) {
        const queryString = `UPDATE ${tableInput} SET ${columns} = '${values}' WHERE ${condition}`;
        console.log(queryString);
        connection.query(queryString, function(err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    }
}

module.exports = orm;

