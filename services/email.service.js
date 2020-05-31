'use strict';

const nodemailer = require('nodemailer');
const logger = require('log4js').getLogger("EmailService");
const Q = require('q');

module.exports.sendEmail = sendEmail;

/**
 * Servicio para envio de correo
 * @param {*} to Email al que se va a enviar el correo
 * @param {*} subject asunto del correo
 * @param {*} html contenido del email
 */
function sendEmail(to, subject, html) {

    const deferred = Q.defer();
    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
        "host": "smtp.ethereal.email",
        "port": 587,
        "auth": {
            "user": "kariane.lemke2@ethereal.email",
            "pass": "kafsc9nvtdb5W72Tma"
        }
    });

    // setup email data with unicode symbols
    let mailOptions = {
        from: '"Sandeli Sabores" ', // sender address
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


