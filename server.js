/**
 * Created by Pavel on 07.07.2017.
 */
const express = require('express');
const Sequelize = require('sequelize');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');

const errors = require('./utils/errors');
const config = require('./tsconfig');

const dbcontext = require('./context/db')(Sequelize, config);

const authService = require('./services/auth')(dbcontext.users,errors);
const filmService = require('./services/films')(dbcontext.films,errors);
const cinemasService = require('./services/cinemas')(dbcontext.cinemas,errors);

const apiController = require('./controllers/api')(authService,filmService,cinemasService,config);
const logger = require('./utils/logger');

const app = express();

app.use(express.static('public'));
app.use(cookieParser(config.cookie.key));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));


app.use('/api', logger);
app.use('/api', apiController);


dbcontext.sequelize
   .sync()
   .then(() =>
   {
app.listen(3000, () => console.log('---Сервер запущен---'));
 })
.catch((err) => console.log(err));