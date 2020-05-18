
const orm = require("../config/orm");

let burger = {
    selectAll: (cb) => {
        orm.selectAll("burgers", (res) => {
            cb(res);
        });
    },
    insertOne: (values, cb) => {
        orm.insertOne("burgers", "burger_name", values, (res) => {
            cb(res);
        });
    },
    updateOne: (values, condition, cb) => {
        orm.updateOne("burgers", "devoured", values, condition, (res) => {
            cb(res);
        });
    }
};
module.exports = burger;

// cb is a func used as a direct arg of another func
