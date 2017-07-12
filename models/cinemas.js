/**
 * Created by Pavel on 07.07.2017.
 */
module.exports = (Sequelize, sequelize) => {
    return sequelize.define('cinemas', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        title: Sequelize.STRING
    });
};