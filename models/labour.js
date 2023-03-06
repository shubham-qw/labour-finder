const mongoose = require("mongoose");
const {Schema , model} = mongoose;


const labourSchema = new Schema ({
    "name" : {type : String, default : "No name"},
    "photo" : {type : String , default : "https://www.freeiconspng.com/thumbs/no-image-icon/no-image-icon-0.png"},
    "age" : {type : Number, default : 0},
    "info" : {type : String , default : "No info available"},
    "exp" : {type : Number, default : 0},
    "location"  : {type : String , default : "Location not available"},
    "workRadius" : {type : Number, default : 0},
    "work" : {type : String, default : "No specified"}
})


module.exports = model("Labour" , labourSchema);