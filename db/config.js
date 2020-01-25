const mongoose = require('mongoose');

var schema = new mongoose.Schema({
  id: { type: Number, Unique: true },
  name: String,
  item_number: { type: Number, dropDups: true },
  images: [],
  features: []
});

module.exports = {
  dbSize: 10,
  uri: 'mongodb://localhost:27017/costco',
  options: { useNewUrlParser: true, useUnifiedTopology: true },
  Product: mongoose.model('Product', schema)
}