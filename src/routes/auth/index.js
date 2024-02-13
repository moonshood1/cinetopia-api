const express = require("express");

const {
  login,
  register,
  resetPassword,
  initPasswordReset,
} = require("./controller");

const router = express.Router();

router.post("/login", login);
router.post("/register", register);
router.put("/password", resetPassword);
router.post("/password", initPasswordReset);

module.exports = router;
