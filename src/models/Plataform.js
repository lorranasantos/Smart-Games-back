const {Model, DataTypes} = require ("sequelize");

class Plataform extends Model {

    static init(sequelize){
        super.init(
            {
                name: DataTypes.STRING
            },
            {
                sequelize,
                tableName: "plataform",
            }
        );
    }
    static associate(models){
        this.belongsToMany(models.Game, {through: "game_plataform"})
    }
}
module.exports = Plataform;