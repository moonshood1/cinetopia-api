const express = require("express");

const { login, register, resetPassword } = require("./controller");

const router = express.Router();

router.post("/login", login);
router.post("/register", register);
router.put("/password", resetPassword);

module.exports = router;
