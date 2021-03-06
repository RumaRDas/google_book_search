const express = require('express');
const mongoose = require('mongoose');
const router = require('./routes');
const path = require("path");

// Define middleware here
const app = express();
const PORT = process.env.PORT || 4001;

// Serve up static assets (usually on heroku)
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV !== "production") {
    app.use(express.static("client/build"));

}

// Add routes, both API and view
app.use(router);

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/booklist");

// Start the API server
app.listen(PORT, function () {
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});