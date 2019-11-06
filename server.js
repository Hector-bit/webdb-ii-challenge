const express = require('express');

const carRoutes = require('./data/car/cars-route');

const db = require('./data/dbConfig.js');

const server = express();

server.use(express.json());

server.use('/api/cars', carRoutes);

server.get('/', (req, res) => {
    res.send('Hello world of cars');
})

module.exports = server;