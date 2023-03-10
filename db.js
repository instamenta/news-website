const mongoose = require('mongoose');
const config = require('./config');

mongoose.connect('mongodb://localhost:27017/news-app', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err))

module.exports = mongoose
