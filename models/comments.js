/**
 * Created by Pavel on 07.07.2017.
 */
module.exports = (Sequelize, sequelize) => {
    return sequelize.define('comments', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        id_user: Sequelize.INTEGER,

        id_film: Sequelize.INTEGER,
        comment:Sequelize.STRING,
        date:Sequelize.DATE
    });
};