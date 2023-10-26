const express = require('express');

const HOME = express.Router();
module.exports = HOME;

HOME.get('/', (req, res) => {
    res.render('home/home');
});
