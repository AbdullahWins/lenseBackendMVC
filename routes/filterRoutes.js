const express = require("express");
const router = express.Router();

const {
  addOneFilter,
  getOneFilter,
  getAllFilters,
  getFiltersByPlatform,
  getFiltersByPlatformAndCategory,
  getFiltersByPlatformAndCategoryAndCollection,
} = require("../controllers/filterController");

router.get("/filters/find/:id", getOneFilter);
router.get("/filters/all", getAllFilters);
router.post("/filters/add", addOneFilter);
router.get("/filters/:platformName", getFiltersByPlatform);
router.get(
  "/filters/:platformName/:categoryName",
  getFiltersByPlatformAndCategory
);
router.get(
  "/filters/:platformName/:categoryName/:collectionName",
  getFiltersByPlatformAndCategoryAndCollection
);

module.exports = router;
