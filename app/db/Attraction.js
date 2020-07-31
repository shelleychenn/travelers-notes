const mongoose = require('mongoose');
const db = require('./mongodb');
mongoose.Promise = global.Promise;

const attractionSchema = new mongoose.Schema({
  search_key: String,
  attractions: Array,
});

const AttractionEntry = mongoose.model('AttractionEntry', attractionSchema);

module.exports = AttractionEntry;
