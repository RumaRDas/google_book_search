const express = require('express');
const mongoose = require('mongoose');

// Define middleware here
const app = express();
const PORT = process.env.PORT || 5000;

// Serve up static assets (usually on heroku)
app.use(express.urlencoded({extended: true}));
app.use(express.json());

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/bookdata");

// Start the API server
app.listen(PORT, function() {
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
  });