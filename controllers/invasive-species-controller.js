// ./controllers/invasive-species.js

const express = require('express')
const router = express.Router()
// we can use 'object-destructuring' to access just the model we need for this controller 
const {Species} = require('../models')  //the point of the index.js is so that we can export everything in index

///////////////////////////////
// ROUTES
////////////////////////////////

// display all data 
// SPECIES INDEX ROUTE
router.get("/", async (req, res) => {
	try {
    // get all people
    res.status(200).json(await Species.find({}));
  } catch (error) {
    //send error
    res.status(400).json(error);
  }
});


// SPECIES CREATE ROUTE
// http://localhost:4040/invasiveSpecies
router.post("/", async (req, res) => {
	try {
	  // create new person
	  res.status(201).json(await Species.create(req.body));
	} catch (error) {
	  //send error
	  res.status(400).json(error);
	}
  });

// SPECIES SHOW ROUTE
// http://localhost:4040/invasiveSpecies/:id
router.get("/:id", async (req, res) => {
    try {
        // send one Specie
        res.json(await Species.findById(req.params.id));
      } catch (error) {
        //send error
        res.status(400).json(error);
      }
});


// Species UPDATE ROUTE
router.put("/:id", async (req, res) => {
	try {
	  // update Specie by ID
	  res.json(
		await Species.findByIdAndUpdate(req.params.id, req.body, {new:true})
	  );
	} catch (error) {
	  //send error
	  res.status(400).json(error);
	}
  });
  
  // PEOPLE DELETE ROUTE
  router.delete("/:id", async (req, res) => {
	try {
	  // delete Specie by ID
	  res.json(await Species.findByIdAndRemove(req.params.id));
	} catch (error) {
	  //send error
	  res.status(400).json(error);
	}
  });
  











// // PEOPLE INDEX ROUTE
// // 200 - says its a GET route and its workin how I want it to 
// router.get("/", async (req, res) => { 
//     //if its a 200 status, then send the message
// 	res.status(200).json({message:"invasive species index route"})
// });

// // PEOPLE CREATE ROUTE
// router.post("/", async (req, res) =>  {
// 	res.status(201).json({message: "invasive species create route"})
// });

module.exports = router
