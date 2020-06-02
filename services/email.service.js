'use strict';

const nodemailer = require('nodemailer');
const logger = require('log4js').getLogger("EmailService");
const Q = require('q');

module.exports.sendEmail = sendEmail;

/**
 * Servicio para envio de correo
 * @param {*} from Email from
 * @param {*} to Email to
 * @param {*} subject asunto del correo
 * @param {*} html contenido del email
 */
function sendEmail(from, to, subject, html) {

    const deferred = Q.defer();
    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
        "host": process.env.EMAIL_HOST,
        "port": process.env.EMAIL_PORT,
        "auth": {
            "user": process.env.EMAIL_USER,
            "pass": process.env.EMAIL_PASSWORD
        }
    });

    // setup email data with unicode symbols
    let mailOptions = {
        from: from, // sender address
        to: to, // list of receivers
        subject: subject, // Subject line
        text: '', // plain text body
        html: html// html body
    };

    logger.debug("Sending Email ", mailOptions);

    transporter.sendMail(mailOptions, (error, info) => {

        if (error)
            deferred.reject(error);

        //Logger.logInfo('Message sent: %s', info.messageId);
        // Preview only available when sending through an Ethereal account
        //Logger.logInfo('Preview URL: %s', nodemailer.getTestMessageUrl(info));
        logger.debug("Email send successfull to " + mailOptions.to);
        deferred.resolve(mailOptions);
        // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@blurdybloop.com>
        // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
    });

    return deferred.promise;

};


