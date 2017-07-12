/**
 * Created by Pavel on 07.07.2017.
 */
module.exports = (Sequelize, sequelize) => {
    return sequelize.define('marks', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        id_user: Sequelize.INTEGER,

        id_film: Sequelize.INTEGER,
        mark: Sequelize.STRING
    });
};