const express = require("express");

const gameController = require("./controllers/game");
const storeController = require("./controllers/store");
const plataformController = require("./controllers/plataform");

const routes = express.Router();

//game
routes.get("/game", gameController.index);
routes.get("/game/:id", gameController.find);
routes.put("/game/:id", gameController.update);

// store
routes.get("/store", storeController.index);
routes.get("/store/:id", storeController.find);

// Plataform
routes.get("/plataform", plataformController.index);

module.exports = routes;
