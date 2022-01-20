const express = require('express');
const boxOnerouter = express.Router();
const { getBoxOneData, createBoxOneData } = require('../controllers/boxOne');

boxOnerouter.route('/boxOne').get(getBoxOneData).post(createBoxOneData);

module.exports = boxOnerouter;
