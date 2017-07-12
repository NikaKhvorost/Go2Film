/**
 * Created by Pavel on 07.07.2017.
 */
module.exports = (Sequelize, sequelize) => {
    return sequelize.define('films', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        title: Sequelize.STRING,

        description: Sequelize.STRING,
        rating:Sequelize.DOUBLE,
        date_start:Sequelize.DATE,
        date_end:Sequelize.DATE
    });
};