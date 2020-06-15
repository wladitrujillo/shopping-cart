'use strict';

const nodemailer = require('nodemailer');
const logger = require('log4js').getLogger("GoogleRecaptcha");
const Q = require('q');
const request = require('request');

module.exports.verify = verify;

/**
 * Servicio para envio de correo
 * @param {*} token token

 */
function verify(token) {

    const deferred = Q.defer();

    // Send the HTTP request to the Messenger Platform
    request({
        "uri": `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.GOOGLE_RECAPTCHA_KEY}&response=${token}`,
        "method": "POST",
        "json": {}
    }, (err, res, body) => {        
        if (!err) {     
            deferred.resolve(body);           
        } else {
            logger.error("Unable to verify token:", err);
            deferred.reject(err);
        }
    });


    return deferred.promise;

};


