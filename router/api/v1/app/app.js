const express = require('express');

const APP = express.Router();
module.exports = APP;

APP.use('/create', require('./routes/app.create.js'));
APP.use('/delete', require('./routes/app.delete.js'));
