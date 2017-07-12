/**
 * Created by Pavel on 11.07.2017.
 */
const express = require('express');
const request = require('request');

module.exports=(cinemasService,config)=>
{
    const router = express.Router();

    router.get('/getCinemas', (req, res) =>
    {
        cinemasService.getCinemas()
            .then((data) =>
            {
                res.send(data);
            })
            .catch((err) => res.error(err));

    });

    return router;
}