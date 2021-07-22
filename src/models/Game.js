const {Model, DataTypes} = require ("sequelize");
const game = require("../controllers/game");

class Game extends Model {

    static init(sequelize){
        super.init(
            {
                name: DataTypes.STRING,
                description: DataTypes.TEXT,
                price: DataTypes.DOUBLE,
                image: DataTypes.STRING
            },
            {
                sequelize,
                tableName : "game",
            }
        );
    }
    static associate(models){
        this.belongsToMany(models.Store, {through: "game_store"});
    }
}
module.exports = Game;