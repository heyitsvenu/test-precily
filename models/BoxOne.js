const mongoose = require('mongoose');

const BoxOneSchema = new mongoose.Schema({
  data: {
    type: String,
    required: [true, 'must provide data'],
    trim: true,
  },
});

module.exports = mongoose.model('BoxOneData', BoxOneSchema);
