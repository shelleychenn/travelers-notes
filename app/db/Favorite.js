const mongoose = require('mongoose');
const db = require('./mongodb');
mongoose.Promise = global.Promise;

const favoriteSchema = new mongoose.Schema({
  name: String,
  image_url: String,
  location: String,
  num_of_reviews: Number,
  address: String,
});

const FavoriteEntry = mongoose.model('FavoriteEntry', favoriteSchema);

module.exports = FavoriteEntry;
