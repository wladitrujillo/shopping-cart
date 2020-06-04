'use strict';

const Q = require('q');
const product = require('../models/./product');
const logger = require('log4js').getLogger("ProductService");

module.exports.query = query;
module.exports.get = get;

const dataFolder = "./data/sandeli";

function query(q, fields, sort, page, perPage) {


    logger.debug("Init query");


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

    product.find(criteria).count(function (error, count) {


       
        if (error) {
            logger.error("Error", error);
            deferred.reject({ message: error });
        }


        response.count = count;
        //exec me permite dar mas especificaciones a find
        product.find(criteria)
            .select(fields)
            .skip(perPage * page)
            .limit(perPage)
            .sort(sort)
            .exec(function (error, data) {
                if (error) {
                    logger.error("Service error", error);
                    deferred.reject({ message: error });
                }

                response.data = data;
                deferred.resolve(response);
            });

    });

    return deferred.promise;
}



/**
 * GetInfo
 * @param {*} id 
 */
function get(_id) {
    logger.debug("get start by id");
    var deferred = Q.defer();
    product.findOne(
        { _id: _id },
        function (err, object) {
            if (err)
                deferred.reject(err);

            deferred.resolve(object);
        });

    return deferred.promise;
}