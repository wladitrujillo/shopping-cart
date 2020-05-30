'use strict';

const fs = require('fs');
const Q = require('q');
const logger = require('log4js').getLogger("ShopperService");

module.exports.getInfo = getInfo;

/**
 * GetInfo
 * @param {*} id 
 */
function getInfo() {
    logger.debug("get info");

    var deferred = Q.defer();

    fs.readFile('./data/info.json', (err, data) => {

        if (err) {
            logger.error("Service error", err);
            deferred.reject({ message: err });
        }
        
        deferred.resolve(JSON.parse(data));

    });

    return deferred.promise;
}