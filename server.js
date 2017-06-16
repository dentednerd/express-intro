const express = require('express'),
morgan = require('morgan');

const server = express();

server.use(morgan('dev'));

server.get('/hello', (req, res) => {
    res.send('<h1>Hello from the server!</h1>');
});

server.listen(3000, function () {
    console.log('Server listening on port 3000');
});

