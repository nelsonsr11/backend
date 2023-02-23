var createError = require("http-errors");
const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();
app.use(express.json());
var path = require("path");

app.use(cors());

app.use("/", require("./routes/message"));
app.use("/messages", require("./routes/message"));

// connects to mognoDB
mongoose
  .connect("mongodb://localhost/tickets")
  .then((x) =>
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  )
  .catch((err) => console.error("Error connecting to mongo", err));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
module.exports = app;
