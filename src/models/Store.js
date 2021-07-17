const {Model, DataTypes} = require ("sequelize");

class Store extends Model {

    static init(sequelize){
        super.init(
            {
                place: DataTypes.STRING,
                
            },
            {
                sequelize,
            }
        );
    }
    static associate(models){
    }
}
module.exports = Store;