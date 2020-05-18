const express = require("express");
const burger = require("../models/burger");
const router = express.Router();

// Backend retrieves burger names list to render in index.handlebars

router.get("/", (req, res) => {
    burger.selectAll((data) => {
        const burgersData = {
            burgers: data
        };
        console.log(burgersData);
        res.render("index", burgersData)
    })
})

// POST route adds a new burger to the db table and refreshes the page to display the new burger
router.post("/api/burgers", (req, res) => {
    console.log(req.body.name)
    burger.insertOne(req.body.name, (result) => {
res.redirect("/")
    });
});

// PUT route changes the burger obj state
router.put("/api/burgers/:id", (req, res) => {
    const dondition = "id = " + req.params.id;
    
burger.updateOne(1, condition, (result) => {
    if (result.changedRows == 0) {
        return res.status(404).end();
    } else {
        res.status(200).end();
    }
})
});

module.exports = router;
