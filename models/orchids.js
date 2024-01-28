const mongoose = require('mongoose');

const orchidSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  nation: {
    type: String,
    required: true,
  },
  isNatural: {
    type: Boolean,
    required: true,
  },
  color: {
    type: String,
    required: true,
  },
});

const Orchid = mongoose.model('Orchid', orchidSchema);

module.exports = Orchid;
