const Game = require("../models/Game");
const Store = require("../models/Store");
const Plataform = require("../models/Plataform");

module.exports = {
    index(req, res){
        const {page} = req.query;
        try {
            const gameInfo = await Game.findAll({
                attributes:[
                    "id",
                    "name",
                    "description",
                    "price",
                    "image",

                ],
                include:[
                    {
                        association:"Store",
                        attributes:["id", "place", "quantity"],
                    },
                    {
                        association:"Plataform",
                        attributes:["id", "name"],
                        through: {attributes: []},
                    },
                ]
            })
        } catch (error) {
            console.log(error);
            res.status(500).send(error);
        }
    }
}