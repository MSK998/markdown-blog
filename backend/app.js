const express = require("express");
const bodyparser = require("body-parser");
const articleRoute = require("./routes/article");
const archiveRoute = require("./routes/archive");
// Only needed when we serve pages to users
// const path = require("path");

const app = express();

app.use(bodyparser.json());

// Enable CORS for front end to work while in development
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    res.setHeader(
      "Access-Control-Allow-Methods",
      "GET, POST, PUT, PATCH, DELETE, OPTIONS"
    );
    next();
  });

app.use("/", articleRoute);
app.use("/archive", archiveRoute)

module.exports = app;
