'use strict';

const fs = require('fs');
const Q = require('q');
const logger = require('log4js').getLogger("ShopperService");

const dataFolder = "./data/sandeli";

module.exports.getInfo = getInfo;
module.exports.getSliders = getSliders;
module.exports.getRecommends= getRecommends;

/**
 * GetInfo
 * @param {*} id 
 */
function getInfo() {

    var deferred = Q.defer();

    fs.readFile(dataFolder + '/info.json', (err, data) => {

        if (err) {
            logger.error("Service error", err);
            deferred.reject({ message: err });
        }

        deferred.resolve(JSON.parse(data));

    });

    return deferred.promise;
}

/**
 * GetInfo
 * @param {*} id 
 */
function getSliders() {

    var deferred = Q.defer();

    fs.readFile(dataFolder + '/sliders.json', (err, data) => {

        if (err) {
            logger.error("Service error", err);
            deferred.reject({ message: err });
        }

        deferred.resolve(JSON.parse(data));

    });

    return deferred.promise;
}

/**
 * GetInfo
 * @param {*} id 
 */
function getRecommends() {

    var deferred = Q.defer();

    fs.readFile(dataFolder + '/recommends.json', (err, data) => {

        if (err) {
            logger.error("Service error", err);
            deferred.reject({ message: err });
        }

        deferred.resolve(JSON.parse(data));

    });

    return deferred.promise;
}