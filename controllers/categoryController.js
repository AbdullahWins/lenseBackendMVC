// controllers/categoryController.js

const { ObjectId } = require("mongodb");
const { categoriesCollection } = require("../database/db");

//get all categories from all platform
const getAllCategories = async (req, res) => {
  try {
    const query = {};
    const cursor = categoriesCollection.find(query);
    const categories = await cursor.toArray();
    console.log(`Found ${categories.length} categories`);
    res.send(categories);
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
};

//get all categories form single platform
const getCategoriesByPlatform = async (req, res) => {
  try {
    const platform = req.params.platformName;
    const categories = await categoriesCollection
      .find({
        platformName: platform,
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

//get single category
const getOneCategory = async (req, res) => {
  try {
    const categoryId = req.params.id;
    const category = await categoriesCollection.findOne({
      _id: new ObjectId(categoryId),
    });
    if (!category) {
      res.status(404).send("Category not found");
    } else {
      res.send(category);
      console.log(category);
    }
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
};

//add new category
const addOneCategory = async (req, res) => {
  console.log(req);
  try {
    const category = req.body;
    const result = await categoriesCollection.insertOne(category);
    res.send(result);
    console.log(result);
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
};

module.exports = {
  getAllCategories,
  getOneCategory,
  addOneCategory,
  getCategoriesByPlatform,
};
