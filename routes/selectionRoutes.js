const express = require("express");
const router = express.Router();

const {
  getAllPlatforms,
  getAllCategories,
  getAllTypes,
  getAllColors,
} = require("../controllers/selectionController");

router.get("/selections/platforms/all", getAllPlatforms);
router.get("/selections/categories/all", getAllCategories);
router.get("/selections/types/all", getAllTypes);
router.get("/selections/colors/all", getAllColors);

module.exports = router;
