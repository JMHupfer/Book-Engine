const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://jmhupfer:Germanboy_321@cluster2.fjeqjsy.mongodb.net/books_DB?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

module.exports = db;
