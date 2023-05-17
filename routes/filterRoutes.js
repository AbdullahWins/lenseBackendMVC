const express = require("express");
const router = express.Router();

const {
  getOneFilter,
  getAllFilters,
  getFiltersByCategory,
  getFiltersByPlatform,
  addOneFilter,
} = require("../controllers/filterController");

router.get("/filters/find/:id", getOneFilter);
router.get("/filters/all", getAllFilters);
router.get("/filters/categories/:categoryName", getFiltersByCategory);
router.get("/filters/platforms/:platformName", getFiltersByPlatform);
router.post("/filters/add", addOneFilter);

module.exports = router;
