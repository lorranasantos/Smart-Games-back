const express = require("express");
require  ("./database");

const cors = require("cors")
const { errors } = require("celebrate");

const app = express();

const routes = require("./routes");


app.use(express.json());
app.use(cors());
app.use(routes);
app.use(errors());

module.exports = app;