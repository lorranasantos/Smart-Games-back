const Store = require("../models/Store");

module.exports = {
    async index(req, res){
        try {
            const store = await Store.findAll({
                attributes:[
                    "id",
                    "place",
                    "latitude",
                    "longitude",
                ],
                associate:[
                    {
                        association:"game_store",
                        through:{ attributes:[] },
                        attributes:["id", ""]
                    },
                ],
            });
            res.status(200).send(store);
        } catch (error) {
            console.log("falha" + error);
            res.status(500).send(error);
        }
    },
};