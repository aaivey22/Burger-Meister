const express = require("express");
const burger = require("../models/burger");
const router = express();

// Backend retrieves burger names list to render in index.handlebars
router.get("/", (req, res) => {
    burger.selectAll((data) => {
        const burgersData = {
            burgers: data
        };
        console.log("burgers_controller.js 11, " + burgersData);
        res.render("index", burgersData)
    })
})

// POST route adds a new burger to the db table and refreshes the page to display the new burger
router.post("/api/burgers", (req, res) => {
    console.log(req.body.name)
    burger.insertOne(req.body.name, (result) => {
        console.log("burgers_controller.js 20, " + result);
        res.redirect("/")
    });
});

// PUT route changes the burger obj state
router.put("/api/burgers/:id", (req, res) => {
    console.log(req.params.id)
    const condition = "id = " + req.params.id;
    console.log("burgers_controller.js 29, " + req.params.id)
    burger.updateOne(1, condition, (result) => {
        if (result.changedRows == 0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

router.delete("/api/burgers/", (req, res) => {
    burger.deleteAll((result) => {
        console.log("burgers_controller.js 41," + result)
        if (result.affectedRows == 0) {
            // If no rows were changed, then the ID must not exist, so 404
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

module.exports = router;

// === checks for the same data type and value