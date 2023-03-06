const express = require('express');
const router = express.Router();
const Labour = require("../models/labour");

router.get("/labour", async function(req,res) {
    console.log("comming");
    try {
    await Labour.find()
    .then ((labour) => {
        res.json({success : true, labour : labour});
    })
    .catch ((err) => {
        console.log(err);
        res.status(400).json({err : err});
    })
}
catch (err) {
    console.log(err);
    res.status(400).json({err : err.message});
}
})

router.post("/labour", function(req,res) {
    try {
    const {name, location} = req.body 
    const labour = new Labour ({name,location});

    labour.save()
    .then ((new_labour) => {
        res.json({success : true, "labour" : new_labour});
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