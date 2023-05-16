const express = require("express");
const router = express.Router();

const {
  getAllPlatforms,
  getOnePlatform,
  addOnePlatform,
} = require("../controllers/platformController");

router.get("/platforms/all", getAllPlatforms);
router.get("/platforms/:id", getOnePlatform);
router.get("/platforms/add", addOnePlatform);

module.exports = router;
