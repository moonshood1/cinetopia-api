const express = require("express");

const { test } = require("./controller");

const router = express.Router();

router.get("/", test);

module.exports = router;
