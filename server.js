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
// Setup listener for incoming messages
bot.on('message', (userId, message) => {
    bot.sendTextMessage(userId, 'Echo Message:' + message);
});
//seteo en middleware manejo de json
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'webapp')));

// public routes
//app.use('/webhook', require('./controllers/facebook'));
app.use('/webhook', bot.middleware());
app.use('/shopper', require('./controllers/shopper'));
app.use('/product', require('./controllers/product'));
app.use('/blog', require('./controllers/blog'));

console.log(`Loading PORT ${process.env.PORT} environment ${process.env.NODE_ENV}`);
const port = process.env.PORT;
app.listen(port, () => console.log(`App listening at http://localhost:${port}`))