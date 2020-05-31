'use strict';

const fs = require('fs');
const Q = require('q');
const logger = require('log4js').getLogger("ProductService");

module.exports.query = query;
module.exports.get = get;

const dataFolder = "./data/sandeli";

function query(user, q, fields, sort, page, perPage) {
    logger.debug("Init query");

    let criteria = {};
    let response = {};
    let deferred = Q.defer();

    let plus = /\+/g;
    let comma = /\,/g;

    criteria.user = user;

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
        page = parseInt(page);
        if (perPage) {
            perPage = parseInt(perPage);
        } else {
            perPage = 100;
        }
    }


    fs.readFile(dataFolder + '/blogs.json', (err, data) => {

        if (err) {
            console.error(err);
            deferred.reject({ message: err });
        }


        let blogs = JSON.parse(data);

        response.count = blogs.length;
        response.data = blogs;


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

    fs.readFile(dataFolder + '/blogs.json', (err, data) => {

        if (err) {
            logger.error("Service error", err);
            deferred.reject({ message: err });
        }

        let blogs = JSON.parse(data);

        deferred.resolve(blogs.find(b => b.id == id));

    });

    return deferred.promise;
}
