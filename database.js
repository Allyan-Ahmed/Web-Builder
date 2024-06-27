const mongoose = require('mongoose');

// mongoose.connect('mongodb://localhost:27017/builder');
mongoose.connect('mongodb+srv://Allyan_Khan:QM4SGCWUqCNuVBML@cluster0.0raqytg.mongodb.net/')

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("Connected successfully to MongoDB");
}); 