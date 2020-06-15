'use strict';

const emailService = require('../../services/email.service');
const shopperService = require('../../services/shopper.service');
const googleService = require('../../services/google.recaptcha');
const logger = require('log4js').getLogger("ShopperController");

module.exports.getInfo = getInfo;
module.exports.getSliders = getSliders;
module.exports.getRecommends = getRecommends;
module.exports.sendEmail = sendEmail;

function getInfo(req, res) {

    shopperService.getInfo()
        .then(data => onSuccess(data, res))
        .catch(err => onError(err, res));

}

function getSliders(req, res) {

    shopperService.getSliders()
        .then(data => onSuccess(data, res))
        .catch(err => onError(err, res));

}

function getRecommends(req, res) {

    shopperService.getRecommends()
        .then(data => onSuccess(data, res))
        .catch(err => onError(err, res));

}


async function sendEmail(req, res) {

    logger.debug("sendEmail start");
    let email = req.body.email;
    let subject = req.body.subject;
    let message = '<div>' + req.body.message + '</div>';

    let token = req.body.token;

    try {

        let response = await googleService.verify(token);

        if (!response.success || response.score < 0.7) {
            logger.error("Robot detected score:", response.score);
            res.status(403).send("You are a robot");
        } else {
            emailService.sendEmail(email, process.env.EMAIL_RECEIVER, subject, message)
                .then(data => onSuccess(data, res))
                .catch(err => onError(err, res));
        }

    } catch (error) {
        res.status(500).send("Error", error.message);
    }

}

function onSuccess(data, response) {
    response.status(200).send(data)
}

function onError(error, response) {
    logger.error("Error ", error);
    response.status(error.code ? error.code : 500).send(error.message);
}
