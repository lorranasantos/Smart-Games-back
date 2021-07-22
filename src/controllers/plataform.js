const Plataform = require("../models/Plataform");

module.exports = {
    async index(req, res){
        try {
            const plataform = await Plataform.findAll({
                attributes:[
                    "id",
                    "name",
                ],
                associate:[
                    {
                        association:"game_plataform",
                        through:{ attributes:[] },
                        attributes:["id"]
                    },
                ],
            });

            res.status(200).send(plataform);
        } catch (error) {
            console.log("falha" + error);
            res.status(500).send(error);
        }
    },
};