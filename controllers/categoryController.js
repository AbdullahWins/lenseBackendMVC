// controllers/categoryController.js

const { ObjectId } = require("mongodb");
const { categoriesCollection } = require("../database/db");

//get all categories
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

//get single category
const getOneCategory = async (req, res) => {
  try {
    const categoryId = req.params.id;
    const category = await categoriesCollection.findOne({
      _id: new ObjectId(categoryId),
    });
    if (!platform) {
      res.status(404).send("Category not found");
    } else {
      res.send(platform);
      console.log(platform);
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
};
