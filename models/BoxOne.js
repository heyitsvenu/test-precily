const mongoose = require('mongoose');

const BoxOneSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'must provide name'],
    trim: true,
  },
  age: {
    type: String,
    required: [true, 'must provide age'],
    trim: true,
  },
});

module.exports = mongoose.model('BoxOneData', BoxOneSchema);
