// Box One Router
const express = require('express');
const boxOnerouter = express.Router();
const {
  getBoxOneData,
  createBoxOneData,
  updateBoxOneData,
} = require('../controllers/boxOne');

boxOnerouter.route('/boxOne').get(getBoxOneData).post(createBoxOneData);
boxOnerouter.route('/boxOne/:id').patch(updateBoxOneData);

module.exports = boxOnerouter;
