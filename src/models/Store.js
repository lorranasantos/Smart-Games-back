const {Model, DataTypes} = require ("sequelize");

class Store extends Model {

    static init(sequelize){
        super.init(
            {
                place: DataTypes.STRING,
                
            },
            {
                sequelize,
                tableName: "plataform",
            }
        );
    }
    static associate(models){
    }
}
module.exports = Store;