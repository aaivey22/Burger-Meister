// Imported the ORM to create functions that will interact with the database.
const orm = require("../config/orm");

let burger = {
    selectAll: function(cb) {
        orm.selectAll("burgers", function(res) {
            cb(res);
        });
    },
    insertOne: function(values, cb) {
        orm.insertOne("burgers", "burger_name", values, function(res) {
            cb(res);
        });
    },
    updateOne: function(values, condition, cb) {
        orm.updateOne("burgers", "devoured", values, condition, function(res) {
            cb(res);
        });
    }
};

// Export the database functions for the controller (burgers_controller.js).
module.exports = burger;

// cb is a func used as a direct arg of another func
