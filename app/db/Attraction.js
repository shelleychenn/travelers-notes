const mongoose = require('mongoose');
const db = require('./mongodb');
mongoose.Promise = global.Promise;

const attractionSchema = new mongoose.Schema({
  search_key: String,
  attractions: Array,
  // result_type: String,
  // location_id: String,
  // name: String,
  // latitude: String,
  // longitude: String,
  // num_reviews: String,
  // timezone: String,
  // location_string: String,
  // photo: Array,
  // awards: Array,
  // rating: String,
  // description: String,
  // nearest_metro_station: String,
  // geo_description: String,
  // address: String,
  // review_snippet: String,
});

const AttractionEntry = mongoose.model('AttractionEntry', attractionSchema);

module.exports = AttractionEntry;
