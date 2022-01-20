const BoxTwo = require('../models/BoxTwo');

const getBoxTwoData = async (req, res) => {
  try {
    const boxTwoData = await BoxTwo.find({});
    res.status(200).json(boxTwoData);
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const createBoxTwoData = async (req, res) => {
  try {
    const boxTwoData = await BoxTwo.create(req.body);
    res.status(200).json(boxTwoData);
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

module.exports = {
  getBoxTwoData,
  createBoxTwoData,
};
