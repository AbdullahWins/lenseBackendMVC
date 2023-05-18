const express = require("express");
const router = express.Router();

const {
  getAllCollectionNames,
  getOneCollectionName,
  addOneCollectionName,
  getCollectionNamesByPlatform,
  getCollectionNamesByPlatformAndCategory,
} = require("../controllers/collectionController");

router.get("/collections/all", getAllCollectionNames);
router.get("/collections/find/:id", getOneCollectionName);
router.get("/collections/add", addOneCollectionName);
router.get("/collections/:platformName", getCollectionNamesByPlatform);
router.get(
  "/collections/:platformName/:categoryName",
  getCollectionNamesByPlatformAndCategory
);

module.exports = router;
