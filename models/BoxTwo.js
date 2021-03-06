const mongoose = require('mongoose');

const BoxTwoSchema = new mongoose.Schema({
  data: {
    type: String,
    required: [true, 'must provide data'],
    trim: true,
  },
});

module.exports = mongoose.model('BoxTwoData', BoxTwoSchema);
