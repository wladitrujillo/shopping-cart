const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const log4js = require('log4js');
const fs = require('fs');
const http = require("http");
const https = require("https");
const dotenv = require('dotenv');

const FBBotFramework = require('fb-bot-framework');


const app = express();

//initializations
log4js.configure('./config/log4js.json');
dotenv.config();
let bot = new FBBotFramework({
    page_token: process.env.PAGE_ACCESS_TOKEN,
    verify_token: process.env.VERIFY_TOKEN
});

//seteo en middleware manejo de json
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'webapp')));

//facebook webook
//app.use('/webhook', require('./controllers/facebook'));
app.use('/webhook', bot.middleware());
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
    bot.sendQuickReplies(userId, message, replies);
});
// public routes
app.use('/shopper', require('./controllers/shopper'));
app.use('/product', require('./controllers/product'));
app.use('/blog', require('./controllers/blog'));

console.log(`Loading PORT ${process.env.PORT} environment ${process.env.NODE_ENV}`);
const port = process.env.PORT;
app.listen(port, () => console.log(`App listening at http://localhost:${port}`))