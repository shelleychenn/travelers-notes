const mongoose = require('mongoose');
const db = require('./mongodb');
mongoose.Promise = global.Promise;

const favoriteSchema = new mongoose.Schema({});

const FavoriteEntry = mongoose.model('FavoriteEntry', favoriteSchema);

module.exports = FavoriteEntry;
