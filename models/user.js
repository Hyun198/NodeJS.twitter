const Sequelize = require('sequelize');

class User extends Sequelize.Model{
    static initiate(sequelize){
        User.init({
            email: {
                type: Sequelize.STRING(40),
                allowNull: false,
                unique: true,
            },
            nick: {
                type: Sequelize.STRING(15),
                allowNull:false,
            },
            password: {
                type: Sequelize.STRING(100),
                allowNull: false,
            }
        });
    }
};

module.exports = User;