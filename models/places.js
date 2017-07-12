/**
 * Created by Pavel on 07.07.2017.
 */
module.exports = (Sequelize, sequelize) => {
    return sequelize.define('places', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        id_hall: Sequelize.INTEGER,

        row: Sequelize.INTEGER,
        column:Sequelize.INTEGER
    });
};