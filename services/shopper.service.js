'use strict';


const Q = require('q');
const company = require('../models/./company');
const slide = require('../models/./slide');
const recommends = require('../models/./recommends');
const logger = require('log4js').getLogger("ShopperService");


module.exports.getInfo = getInfo;
module.exports.getSliders = getSliders;
module.exports.getRecommends = getRecommends;

/**
 * GetInfo
 * @param {*} id 
 */
function getInfo() {

    var deferred = Q.defer();
    company.findOne({}, (err, object) => {
        if (err)
            deferred.reject(err);

        deferred.resolve(object);
    });

    return deferred.promise;
}

/**
 * GetInfo
 * @param {*} id 
 */
function getSliders() {

    var deferred = Q.defer();

    slide.find({})
        .exec((error, data) => {
            if (error) {
                logger.error("Service error", error);
                deferred.reject({ message: error });
            }
            deferred.resolve(data);
        });
    return deferred.promise;
}

/**
 * GetInfo
 * @param {*} id 
 */
function getRecommends() {

    var deferred = Q.defer();

    recommends.find({})
        .populate('items')
        .exec((error, data) => {
            if (error) {
                logger.error("Service error", error);
                deferred.reject({ message: error });
            }
            deferred.resolve(data);
        });

    return deferred.promise;
}