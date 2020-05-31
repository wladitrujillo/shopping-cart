const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const log4js = require('log4js');
const fs = require('fs');
const http = require("http");
const https = require("https");

const app = express();
const port = 3000;


//initializations
log4js.configure('./config/log4js.json');
//seteo en middleware manejo de json
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'webapp')));

// public routes
app.use('/shopper', require('./controllers/shopper'));
app.use('/product', require('./controllers/product'));
app.use('/blog', require('./controllers/blog'));

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))