/**
 * Created by Pavel on 11.07.2017.
 */
const express = require('express');
const request = require('request');

module.exports=(filmsService,config)=>
{
    const router = express.Router();

    router.get('/getFilms/:order', (req, res) =>
    {
        filmsService.getFilms(req.params.order)
            .then((data) =>
            {
                res.send(data);
            })
            .catch((err) => res.error(err));

    });

    router.get('/getTitleById', (req, res) =>
    {
        filmsService.getTitleById(2)
            .then((data) =>
            {
                res.send(data);
            })
            .catch((err) => res.error(err));

    });

return router;
}