/**
 * Created by Pavel on 11.07.2017.
 */
const express = require('express');
module.exports = (authService,filmsService,cinemasService,config)=>{
    const router = express.Router();
    const authController = require('./auth')(authService,config);
    const filmsController = require('./films')(filmsService,config);
    const cinemasController = require('./cinemas')(cinemasService,config);
    router.use('/auth',authController);
    router.use('/films',filmsController);
    router.use('/cinemas',cinemasController);
    return router;
}