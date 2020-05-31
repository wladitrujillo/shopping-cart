'use strict';

const fs = require('fs');
const Q = require('q');
const logger = require('log4js').getLogger("ProductService");

module.exports.query = query;
module.exports.get = get;

const dataFolder = "./data/sandeli";

function query(q, fields, sort, page, perPage) {

    let criteria = {};
    let response = {};
    let deferred = Q.defer();

    let plus = /\+/g;
    let comma = /\,/g;


    if (q) {
        criteria.$text = { $search: q }
    }
    if (sort) {
        sort = sort.replace(plus, '');
        sort = sort.replace(comma, ' ');
    }
    if (fields) {
        fields = fields.replace(comma, ' ');
    }
    if (page) {
        page = parseInt(page) - 1;
        if (perPage) {
            perPage = parseInt(perPage);
        } else {
            perPage = 100;
        }
    }

    fs.readFile(dataFolder + '/product.json', (err, data) => {

        if (err) {
            logger.error("Service error", err);
            deferred.reject({ message: err });
        }

        let products = JSON.parse(data);
     

        response.count = products.length;
        response.data = products.slice(page * perPage, (page * perPage) + perPage);

        deferred.resolve(response);

    });



    return deferred.promise;
}



/**
 * GetInfo
 * @param {*} id 
 */
function get(id) {
    logger.debug("get", id);

    var deferred = Q.defer();

    fs.readFile(dataFolder + '/product.json', (err, data) => {

        if (err) {
            logger.error("Service error", err);
            deferred.reject({ message: err });
        }

        let products = JSON.parse(data);

        deferred.resolve(products.find(p => p.id == id));

    });

    return deferred.promise;
}