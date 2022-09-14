
///////////////////////////////
// DEPENDENCIES
////////////////////////////////

// initialize .env variables
//checking the packages vs . is checking for a file

require("dotenv").config();



// pull PORT from .env, give default value of 4000 and establish DB Connection
const { PORT, MONGODB_URI } = process.env;

// import express
const express = require("express");

// create application object
const app = express();

///////////////////////////////
// DEPENDENCIES
////////////////////////////////

// pull PORT from .env, give default value of 4040
const mongoose = require('mongoose');
mongoose.connect(MONGODB_URI)
//  MY CONTROLLERS
// import people router into server.js
const invasiveSpeciesController = require('./controllers/invasive-species-controller')

//cors and morgan dependencies
const cors = require("cors")
const morgan = require("morgan")

///////////////////////////////
// DATABASE CONNECTION
////////////////////////////////

// Connection Events
mongoose.connection
  .on("open", () => console.log("Your are connected to mongoose"))
  .on("close", () => console.log("Your are disconnected from mongoose"))
  .on("error", (error) => console.log(error));

// MIDDLEWARE
app.use(express.json()) //parse json before any routes
app.use(cors()); //configure to change editing access to just me , cors options
app.use(morgan("dev")); //sends nice messages
app.use('/invasiveSpecies', invasiveSpeciesController)
///////////////////////////////
// ROUTES
////////////////////////////////
// create a test route
app.get("/", (req, res) => {
    res.send("Hello Invasive Species");
});

///////////////////////////////
// LISTENER
////////////////////////////////
app.listen(PORT, () => console.log(`listening on PORT ${PORT}`));
