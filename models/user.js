const mongoose = require("mongoose");
const {Schema , model} = mongoose;

const peopleSchema = new Schema ({
    "name" : {type : String, default : "No name available"},
    "location" : {type : String, default : "No location provided to find nearby labour"}
})


module.exports = model("People", peopleSchema);