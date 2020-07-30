const mongoose = require('mongoose');
const db = require('./mongodb');
mongoose.Promise = global.Promise;

const reviewSchema = new mongoose.Schema({
  search_type: String,
  location_id: String,
  reviews: Array,
});

const ReviewEntry = mongoose.model('ReviewEntry', reviewSchema);

module.exports = ReviewEntry;
