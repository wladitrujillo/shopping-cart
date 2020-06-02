'use strict';

const express = require('express');
const router = express.Router();
const FBBotFramework = require('fb-bot-framework');

const ctrl = require('./webhook');

router.route('/')
    .get(ctrl.get)
    .post(ctrl.post);

let bot = new FBBotFramework({
    page_token: process.env.PAGE_ACCESS_TOKEN,
    verify_token: process.env.VERIFY_TOKEN
});



// Setup listener for incoming messages
bot.on('message', (userId, message) => {

    console.log("message==>", message);
    // Send text message
    // bot.sendTextMessage(userId, "Echo Message:" + message);

    // Send quick replies
    var replies = [
        {
            "content_type": "text",
            "title": "👍",
            "payload": "thumbs_up"
        },
        {
            "content_type": "text",
            "title": "👎",
            "payload": "thumbs_down"
        }
    ];
    bot.sendQuickReplies(userId, message, replies, (err, data) => {
        if (err) console.error(err);
        else console.log(data);
    });
});

//module.exports = bot.middleware();
module.exports = router;