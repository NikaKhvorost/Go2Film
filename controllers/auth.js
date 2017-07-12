/**
 * Created by Pavel on 11.07.2017.
 */
const express = require('express');
const jwt = require('jsonwebtoken');

module.exports = (authService, config) => {
    const router = express.Router();

    router.post('/login', (req, res) => {
        authService.login(req.body)
            .then((userId) => {
                var token = jwt.sign({__user_id: userId}, 'obtc');
                res.cookie('x-access-token', token);
                res.send({success: true});
            })
            .catch((err) => res.error(err));

    });

    router.post('/register', (req, res) => {
        res.header('Content-Type', 'application/json');
        authService.register(req.body)
            .then((userId) => {
                res.send({success: true});
            })
            .catch((err) => res.error(err));


    });
    return router;
}