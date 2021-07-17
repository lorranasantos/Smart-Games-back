const Game = require("../models/Game");

module.exports = {
    async index(res){
        try {
            const game = await Game.findAll();

            res.status(200).send(game);
        } catch (error) {
            console.log(error);
            res.status(500).send({ error });
        }
    },
};