/**
 * Created by Pavel on 07.07.2017.
 */
module.exports = (Sequelize, config) => {
    const options = {
        host: config.db.host,
        dialect: config.db.dialect,
        logging: false,
        define: {
            timestamps: true,
            paranoid: true,
            defaultScope: {
                where: {
                    deletedAt: { $eq: null }
                }
            }
        }
    };

    const sequelize = new Sequelize(config.db.name, config.db.user, config.db.password, options);
    const Cinemas = require('../models/cinemas')(Sequelize, sequelize);
    const Comments = require('../models/comments')(Sequelize, sequelize);
    const Films = require('../models/films')(Sequelize, sequelize);
    const Halls = require('../models/halls')(Sequelize, sequelize);
    const Marks = require('../models/marks')(Sequelize, sequelize);
    const Permissions = require('../models/permissions')(Sequelize, sequelize);
    const Places = require('../models/places')(Sequelize, sequelize);
    const Roles = require('../models/roles')(Sequelize, sequelize);
    const Sessions = require('../models/sessions')(Sequelize, sequelize);
    const Tickets = require('../models/tickets')(Sequelize, sequelize);
    const User_tickets = require('../models/user_tickets')(Sequelize, sequelize);
    const Users = require('../models/users')(Sequelize, sequelize);



    Users.hasOne(Permissions,{foreignKey: 'id_user'});
    Users.hasOne(Marks,{foreignKey: 'id_user'});
    Users.hasOne(Comments,{foreignKey: 'id_user'});
    Users.hasOne(User_tickets,{foreignKey: 'id_user'});

    Roles.hasOne(Permissions,{foreignKey: 'id_role'});

    Films.hasOne(Marks,{foreignKey: 'id_film'});
    Films.hasOne(Comments,{foreignKey: 'id_film'});
    Films.hasOne(Sessions,{foreignKey: 'id_film'});

    Cinemas.hasOne(Sessions,{foreignKey: 'id_cinema'});

    Sessions.hasOne(Tickets,{foreignKey: 'id_session'});
    Sessions.hasOne(Halls,{foreignKey: 'id_session'});

    Halls.hasOne(Places,{foreignKey: 'id_hall'});

    Places.hasOne(Tickets,{foreignKey: 'id_place'});

    Tickets.hasOne(User_tickets,{foreignKey: 'id_ticket'});



    return {
        sequelize: sequelize,
        cinemas:Cinemas,
        comments:Comments,
        films :Films,
        halls:Halls,
        marks:Marks,
        permissions:Permissions,
        places:Places,
        roles:Roles,
        sessions:Sessions,
        tickets:Tickets,
        user_tickets:User_tickets,
        users:Users
    };

};