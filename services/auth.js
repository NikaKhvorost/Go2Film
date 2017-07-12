/**
 * Created by Pavel on 11.07.2017.
 */
"use strict"

var Promise = require("bluebird");
var bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const request = require('request');
const saltRounds = 10;
module.exports = (userRepository, errors) => {
    //const permissions = require('../permissions.json');

    return {login: login,register:register };

    function login(data) {
        return new Promise((resolve, reject) => {
            userRepository
                .findOne({where: {email: data.email}, attributes: ['id', 'password']})
                .then((user) => {

                    bcrypt.compare(data.password, user.password, function (err, res) {
                        if (res) resolve([user.id]);
                        else {
                            reject(errors.wrongCredentials);
                        }
                    });
                })
                .catch(reject);
        });
    }




    function register(data)
    {
        return new Promise((resolve, reject) =>
        {
            if(data.password)
                bcrypt.hash(data.password,saltRounds,function(err,hash){

                    if (err) {
                        throw err;
                    }

                    var user =
                    {
                        email: data.email,
                        password: hash,
                        nick: data.nick
                    };
                    Promise.all([userRepository.create(user)])
                        .then(() => resolve({ success: true }))
                        .catch(reject);
                });

        })



    }

}