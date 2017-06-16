/* eslint-disable no-console */

const express = require('express'),
morgan = require('morgan'),
mongoose = require('mongoose');

const server = express();
const router = require('./routes');

server.set('views', './views');
server.set('view engine', 'ejs');

const DB_URI = 'mongodb://localhost:27017/express-intro';
mongoose.connect(DB_URI, (err) => {
    if (err) return console.log(err);
    console.log('Connected to DB: ', DB_URI);
});

server.use(morgan('dev'));
server.use('/', express.static('public'));
server.use(router);

server.listen(3000, function () {
    console.log('Server listening on port 3000');
});

