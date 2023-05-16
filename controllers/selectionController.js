// controllers/filterController.js

const { ObjectId } = require("mongodb");
const { selectionsCollection } = require("../database/db");

//get all platforms
const getAllPlatforms = async (req, res) => {
  try {
    const query = {};
    const cursor = selectionsCollection.platforms.find(query);
    const platforms = await cursor.toArray();
    console.log(`Found ${platforms.length} platforms`);
    res.send(platforms);
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
};

//get all categories
const getAllCategories = async (req, res) => {
  try {
    const query = {};
    const cursor = selectionsCollection.categories.find(query);
    const categories = await cursor.toArray();
    console.log(`Found ${categories.length} categories`);
    res.send(categories);
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
};

//get all types
const getAllTypes = async (req, res) => {
  try {
    const query = {};
    const cursor = selectionsCollection.types.find(query);
    const types = await cursor.toArray();
    console.log(`Found ${types.length} types`);
    res.send(types);
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
};

//get all colors
const getAllColors = async (req, res) => {
  try {
    const query = {};
    const cursor = selectionsCollection.colors.find(query);
    const colors = await cursor.toArray();
    console.log(`Found ${colors.length} colors`);
    res.send(colors);
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
};

// Get filters by types
const getFiltersByType = async (req, res) => {
  try {
    const filterTypeName = req.params.typeName;
    const filters = await selectionsCollection
      .find({ filterType: filterTypeName })
      .toArray();
    if (filters.length === 0) {
      res.status(404).send("No filters found for the specified type");
    } else {
      res.send(filters);
    }
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
};

// Get filters by category
const getFiltersByCategory = async (req, res) => {
  try {
    const filterCategoryName = req.params.categoryName;
    const filters = await selectionsCollection
      .find({ filterCategory: filterCategoryName })
      .toArray();
    if (filters.length === 0) {
      res.status(404).send("No filters found for the specified category");
    } else {
      res.send(filters);
    }
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
};

//get single filter
const getOneFilter = async (req, res) => {
  try {
    const filterId = req.params.id;
    const filter = await selectionsCollection.findOne({
      _id: new ObjectId(filterId),
    });
    if (!filter) {
      res.status(404).send("Filter not found");
    } else {
      res.send(filter);
      console.log(filter);
    }
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
};

//add new filter
const addOneFilter = async (req, res) => {
  console.log(req);
  try {
    const filter = req.body;
    const result = await selectionsCollection.insertOne(filter);
    res.send(result);
    console.log(result);
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
};

module.exports = {
  getAllPlatforms,
  getAllCategories,
  getAllTypes,
  getAllColors,
};
