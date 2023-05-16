const express = require("express");
const router = express.Router();

const {
  getAllCategories,
  getOneCategory,
  addOneCategory,
} = require("../controllers/categoryController");

router.get("/categories/all", getAllCategories);
router.get("/categories/:id", getOneCategory);
router.get("/categories/add", addOneCategory);

module.exports = router;
