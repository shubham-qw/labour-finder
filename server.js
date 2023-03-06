const express = require('express');
require('dotenv').config();
const app = express();
const cors = require('cors');

app.use(express.json());
app.use(cors());
const dbConnect = require('./db');
dbConnect();

app.use("/api", require("./routes/registerLabour"));
app.use("/api", require("./routes/registerUser"));

const PORT = process.env.PORT;
app.listen(PORT, function() {
    console.log("Server running on port " + PORT);
})