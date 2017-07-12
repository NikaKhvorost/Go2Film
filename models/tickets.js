/**
 * Created by Pavel on 07.07.2017.
 */
module.exports = (Sequelize, sequelize) => {
    return sequelize.define('tickets', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        id_session: Sequelize.INTEGER,

        id_place: Sequelize.INTEGER,
        price:Sequelize.DOUBLE,
        state:Sequelize.BOOLEAN,
        date:Sequelize.DATE
    });
};