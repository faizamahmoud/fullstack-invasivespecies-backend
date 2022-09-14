///////////////////////////////
// DEPENDENCIES
////////////////////////////////
const mongoose = require("mongoose");

///////////////////////////////
// MODELS
////////////////////////////////
const SpeciesSchema = new mongoose.Schema({
  site_name: {type:String,default:null},
  invasive_name: {type:String,default:null},
//   observation_date: { type: String, default: null } ,
  infested_area:{type:String,default:null}, 
  plant_description:{type:String,default:null},
  assesment_date:String

},{timestamps: true});

const SingleSpecie = mongoose.model("SingleSpecie", SpeciesSchema);

module.exports = SingleSpecie
