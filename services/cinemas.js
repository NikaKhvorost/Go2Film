/**
 * Created by Pavel on 11.07.2017.
 */
const request = require('request');
var Promise = require("bluebird");
module.exports = (cinemasRepository, errors) =>
{
    return{getCinemas:getCinemas }


    function getCinemas() {
        return new Promise((resolve,reject)=>{
            cinemasRepository.findAll({attributes: ['title']})
                .then((data)=>{
                    resolve(data);
                })
                .catch(reject);
        })
    }
}
