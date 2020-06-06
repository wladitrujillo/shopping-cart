'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const log4js = require('log4js');
const fs = require('fs');
const http = require("http");
const https = require("https");
const dotenv = require('dotenv');
const mongoose = require('mongoose');


const os = require('os');
const ifaces = os.networkInterfaces();

const app = express();

//initializations
log4js.configure('./config/log4js.json');
dotenv.config();
//Conexión a la base mongodb    
mongoose.connect(process.env.MONGODB_URL,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true
    })
    .catch(err => logger.error(err));


//seteo en middleware manejo de json
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'webapp')));

//facebook webook
app.use('/webhook', require('./controllers/facebook'));
// public routes
app.use('/shopper', require('./controllers/shopper'));
app.use('/product', require('./controllers/product'));
app.use('/blog', require('./controllers/blog'));

console.log(`Loading PORT ${process.env.PORT} environment ${process.env.NODE_ENV}`);
const port = process.env.PORT;
app.listen(port, () => {

    console.log(`App listening at http://localhost:${port}`)

    for (let ifname of Object.keys(ifaces)) {
        var alias = 0;
        ifaces[ifname].forEach(function (iface) {
            if ('IPv4' !== iface.family || iface.internal !== false) {
                // skip over internal (i.e. 127.0.0.1) and non-ipv4 addresses
                return;
            }

            if (alias >= 1) {
                // this single interface has multiple ipv4 addresses

                console.log(`App listening at http://${iface.address}:${port}`)
            } else {
                // this interface has only one ipv4 adress
                console.log(`App listening at http://${iface.address}:${port}`)

            }
            ++alias;
        });

    }

})