// controllers/categoryController.js

const { ObjectId } = require("mongodb");
const { collectionsCollection } = require("../database/db");

//get all categories from all platform
const getAllCollectionNames = async (req, res) => {
  try {
    const query = {};
    const cursor = collectionsCollection.find(query);
    const collections = await cursor.toArray();
    console.log(`Found ${collections.length} collections`);
    res.send(collections);
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
};

//filter collection names by platform
const getCollectionNamesByPlatform = async (req, res) => {
  try {
    const platform = req.params.platformName;
    const collections = await collectionsCollection
      .find({
        platformName: platform,
      })
      .toArray(); // Convert the cursor to an array

    if (collections.length === 0) {
      // Check if the array is empty
      res.status(404).send("Collections not found");
    } else {
      res.send(collections);
      console.log(collections);
    }
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
};

//filter collection names by platform and category
const getCollectionNamesByPlatformAndCategory = async (req, res) => {
  try {
    const platform = req.params.platformName;
    const category = req.params.categoryName;
    const categories = await collectionsCollection
      .find({
        platformName: platform,
        categoryName: category,
      })
      .toArray(); // Convert the cursor to an array

    if (categories.length === 0) {
      // Check if the array is empty
      res.status(404).send("Categories not found");
    } else {
      res.send(categories);
      console.log(categories);
    }
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
};

//get all collections form single category
const getCollectionNamesByCategory = async (req, res) => {
  try {
    const category = req.params.categoryName;
    const categories = await collectionsCollection
      .find({
        categoryName: category,
      })
      .toArray(); // Convert the cursor to an array

    if (categories.length === 0) {
      // Check if the array is empty
      res.status(404).send("Categories not found");
    } else {
      res.send(categories);
      console.log(categories);
    }
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
};

//get single collections
const getOneCollectionName = async (req, res) => {
  try {
    const collectionId = req.params.id;
    const collection = await collectionsCollection.findOne({
      _id: new ObjectId(collectionId),
    });
    if (!collection) {
      res.status(404).send("Category not found");
    } else {
      res.send(collection);
      console.log(collection);
    }
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
};

//add new collection
const addOneCollectionName = async (req, res) => {
  console.log(req);
  try {
    const collection = req.body;
    const result = await collectionsCollection.insertOne(collection);
    res.send(result);
    console.log(result);
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
};

module.exports = {
  getAllCollectionNames,
  getOneCollectionName,
  addOneCollectionName,
  getCollectionNamesByPlatform,
  getCollectionNamesByCategory,
  getCollectionNamesByPlatformAndCategory,
};
