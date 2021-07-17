const express = require("express");

const gameController = require("./controllers/game");

const routes = express.Router();

//game
routes.get("/game", gameController.index);

module.exports = routes;