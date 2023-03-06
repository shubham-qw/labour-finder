const express = require('express');
const router = express.Router();
const Labour = require("../models/labour");

router.get("/labour", async function(req,res) {
    try {
    await Labour.find()
    .then ((labour) => {
        res.josn({labour : labour});
    })
    .catch ((err) => {
        res.status(400).json({err : err});
    })
}
catch (err) {
    res.status(400).json({err : err.message});
}
})

router.post("/labour", function(req,res) {
    try {
    const {name} = req.body 
    const labour = new Labour ({name});

    labour.save()
    .then ((new_labour) => {
        res.json({"labour" : new_labour});
    })
    .catch ((err) => {
        res.status(400).json({err : err});
    })
    }
    catch (err) {
        res.status(400).json({err : err.message});
    }
})

module.exports = router;