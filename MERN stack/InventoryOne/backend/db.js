const mongoose = require('mongoose');
require('dotenv').config();

const dbUrl = process.env.dbUrl;

mongoose
  .connect(dbUrl, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to the database'))
  .catch((err) => console.error('Error connecting to the database:', err));

module.exports = mongoose.connection;
