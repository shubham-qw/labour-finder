const express = require('express');
require('dotenv').config();
const app = express();

app.use(express.json());
const dbConnect = require('./db');
dbConnect();

app.use("/api", require("./routes/registerLabour"));
app.use("/api", require("./routes/registerUser"));

const PORT = process.env.PORT;
app.listen(PORT, function() {
    console.log("Server running on port " + PORT);
})