const BoxOne = require('../models/BoxOne');

const getBoxOneData = async (req, res) => {
  try {
    const boxOneData = await BoxOne.find({});
    res.status(200).json(boxOneData);
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const createBoxOneData = async (req, res) => {
  try {
    const boxOneData = await BoxOne.create(req.body);
    res.status(200).json(boxOneData);
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

module.exports = {
  getBoxOneData,
  createBoxOneData,
};
