const express = require('express');
const router = express.Router();
const People = require("../models/user");


router.post("/user", function(req,res) {
    try {
    const {name} = req.body 
    const user = new People ({name});
    
    user.save()
    .then ((new_user) => {
        res.json({"user" : new_user});
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