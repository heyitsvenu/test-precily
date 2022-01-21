const BoxOne = require('../models/BoxOne');

// Get Request API for Box One Data
const getBoxOneData = async (req, res) => {
  try {
    const boxOneData = await BoxOne.find({});
    res.status(200).json(boxOneData);
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

// Post Request API for Box One Data
const createBoxOneData = async (req, res) => {
  try {
    const boxOneData = await BoxOne.create(req.body);
    res.status(200).json(boxOneData);
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

// Patch Request API for Box One Data
const updateBoxOneData = async (req, res) => {
  try {
    const { id } = req.params;
    const boxOneData = await BoxOne.findByIdAndUpdate({ _id: id }, req.body, {
      new: true,
      runValidators: true,
    });
    res.status(200).json(boxOneData);
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

module.exports = {
  getBoxOneData,
  createBoxOneData,
  updateBoxOneData,
};
