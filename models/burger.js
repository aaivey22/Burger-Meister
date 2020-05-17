// * Also inside `burger.js`, create the code that will call the ORM functions using burger specific input for the ORM.

// * Export at the end of the `burger.js` file.

const orm = require("../config/orm");

let burger = {
    selectAll: (cb) => {
        orm.selectAll("burgers", (res) => {
            cb(res);
        });
    },
    insertOne: (name, cb) => {
        orm.insertOne("burgers", "burger_name", name, (res) => {
            cb(res);
        });
    },
    updateOne: (id, cb) => {
        orm.updateOne("burgers", "devoured", true, "id", id, (res) => {
            cb(res);
        });
    }
}
module.exports = burger;

//cb is a func used as a direct arg of another func