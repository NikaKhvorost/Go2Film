/**
 * Created by Pavel on 07.07.2017.
 */
module.exports = (Sequelize, sequelize) => {
    return sequelize.define('users', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        email: {
            type: Sequelize.STRING,
            unique: true,

            validate: {
                isEmail: true
            }
        },
        password: Sequelize.STRING,
        nick: {
            type: Sequelize.STRING,
            unique: true
        },
        tel_number:Sequelize.STRING,
        refpass:Sequelize.BOOLEAN

    });
};