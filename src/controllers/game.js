const Game = require("../models/Game");

module.exports = {
    async index(req, res){
        try {
            const game = await Game.findAll({
                attributes:[
                    "id",
                    "name",
                    "description",
                    "price",
                    "image",

                ],});

            res.status(200).send(game);
        } catch (error) {
            console.log("falha" + error);
            res.status(500).send(error);
        }
    },
};