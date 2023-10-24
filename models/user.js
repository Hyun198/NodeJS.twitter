const Sequelize = require('sequelize');

class User extends Sequelize.Model{
    static initiate(sequelize){
        User.init({
            email:{
                type: Sequelize.STRING(40),
                allowNull:false,
                unique:true,
            },
            nick:{
                type: Sequelize.STRING(15),
                allowNull:false,
                
            },
            password:{
                type: Sequelize.STRING(100),
                allowNull:false,
                
            },
        },
            {
                sequelize,
                timestamps: true,
                underscored:false,
                modelName: 'User',
                tableName: 'users',
                paranoid: true,
                charset: 'utf8',
                collate: 'utf8_general_ci',
            
        });
    }
    static associate(db) {
        db.User.hasMany(db.Post);
    }
};

module.exports = User;