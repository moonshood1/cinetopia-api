const express = require("express");
const {
  editProfile,
  editPassword,
  getInformations,
  rateArticle,
  saveArticle,
} = require("./controller");

const router = express.Router();

router.route("/").get(getInformations).put(editProfile);
router.route("/article").post(saveArticle).put(rateArticle);
router.put("/password-edit", editPassword);

module.exports = router;
