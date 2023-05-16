// controllers/filterController.js

const { ObjectId } = require("mongodb");
const { platformsCollection } = require("../database/db");

//get all platforms
const getAllPlatforms = async (req, res) => {
  try {
    const query = {};
    const cursor = platformsCollection.find(query);
    const platforms = await cursor.toArray();
    console.log(`Found ${platforms.length} platforms`);
    res.send(platforms);
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
};

//get single platform
const getOnePlatform = async (req, res) => {
  try {
    const platformId = req.params.id;
    const platform = await platformsCollection.findOne({
      _id: new ObjectId(platformId),
    });
    if (!platform) {
      res.status(404).send("Platform not found");
    } else {
      res.send(platform);
      console.log(platform);
    }
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
};

//add new platform
const addOnePlatform = async (req, res) => {
  console.log(req);
  try {
    const platform = req.body;
    const result = await selectionsCollection.insertOne(platform);
    res.send(result);
    console.log(result);
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
};

module.exports = {
  getAllPlatforms,
  getOnePlatform,
  addOnePlatform,
};
