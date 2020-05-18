// 3. Create an `orm.js` file inside `config` directory.

//    * Import (require) `connection.js` into `orm.js`

//    * In the `orm.js` file, create the methods that will execute the necessary MySQL commands in the controllers. These are the methods you will need to use in order to retrieve and store data in your database.

//      * `selectAll()`
//      * `insertOne()`
//      * `updateOne()`

//    * Export the ORM object in `module.exports`.

const connection = require("./connection.js");

const orm = {
    selectAll: function (tableInput, cb) {
        const queryString = "SELECT * FROM " + tableInput + ";";
        connection.query(queryString, (err, result) => {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },
    insertOne: function (tableInput, columns, values, cb) {
        const queryString = "INSERT INTO ${tableInput} (${columns}) VALUES ('${values}')";
        console.log(queryString);
        connection.query(queryString, vals, (err, result) => {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },
    updateOne: function (tableInput, columns, values, condition, cb) {
        const queryString = "UPDATE ${tableInput} SET ${columns} = '${values}' WHERE ${condition}";
        console.log(queryString);
        connection.query(queryString,(err, result) => {
            if (err) {
                throw err;
            }
            cb(result);
        });
    }
}

module.exports = orm;

