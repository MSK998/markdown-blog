const express = require("express");
const bodyparser = require("body-parser");
const articleRoute = require("./routes/article");
const archiveRoute = require("./routes/archive");
// Only needed when we serve pages to users
// const path = require("path");

const app = express();

app.use(bodyparser.json());

app.use("/", articleRoute);
app.use("/archive", archiveRoute)

module.exports = app;
