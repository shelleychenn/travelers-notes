const mongoose = require('mongoose');
const mongoURL = 'mongodb://localhost/mvp';

mongoose.connect(mongoURL, { useNewUrlParser: true });

const db = mongoose.connection;

db.on('error', () => {
  console.log('database connection error!');
});

db.once('open', () => {
  'database connected!';
});

module.exports = db;
