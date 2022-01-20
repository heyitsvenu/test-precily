const express = require('express');
const boxTwoRouter = express.Router();
const { getBoxTwoData, createBoxTwoData } = require('../controllers/boxTwo');

boxTwoRouter.route('/boxTwo').get(getBoxTwoData).post(createBoxTwoData);

module.exports = boxTwoRouter;
