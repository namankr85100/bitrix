const express  = require('express');
const { bitrixController } = require('../controller/bitrix');

const app = express.Router();
app.get('/', bitrixController)

module.exports = app;