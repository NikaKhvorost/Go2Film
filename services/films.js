/**
 * Created by Pavel on 11.07.2017.
 */
const request = require('request');
var Promise = require('bluebird');

module.exports = (filmsRepository,errors) =>
{
    return {getFilms:getFilms,getTitleById:getTitleById};


    function getFilms(fild)
    {
        return new Promise((resolve,reject)=>{
            filmsRepository.findAll({order:[[fild, 'ASC']]})
                .then((data)=>{
                    resolve(data);
                })
                .catch(reject);
        })
    }

    function getTitleById(id)
    {
        return new Promise((resolve,reject)=>{
            filmsRepository.findAll({ where:{id:id},attributes: ['title'] })
                .then((data)=>{
                    resolve(data);
                })
                .catch(reject);
        })
    }

}