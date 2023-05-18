const express = require("express");
const router = express.Router();

const {
  getAllCategories,
  getOneCategory,
  addOneCategory,
  getCategoriesByPlatform,
} = require("../controllers/categoryController");

router.get("/categories/all", getAllCategories);
router.get("/categories/find/:id", getOneCategory);
router.get("/categories/platforms/:platformName", getCategoriesByPlatform);
router.get("/categories/collections/:platformName", getCategoriesByPlatform);
router.get("/categories/add", addOneCategory);

module.exports = router;