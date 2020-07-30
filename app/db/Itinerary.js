const mongoose = require('mongoose');
const db = require('./mongodb');
mongoose.Promise = global.Promise;

const itinerarySchema = new mongoose.Schema({
  date: String,
  time: String,
  activity: String,
  location: String,
  budget: Number,
  notes: String,
});

const ItineraryEntry = mongoose.model('ItineraryEntry', itinerarySchema);

module.exports = ItineraryEntry;
