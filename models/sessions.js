/**
 * Created by Pavel on 07.07.2017.
 */
module.exports = (Sequelize, sequelize) => {
    return sequelize.define('sessions', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        id_film: Sequelize.INTEGER,

        id_cinema: Sequelize.INTEGER,
        time:Sequelize.TIME
    });
};