const express = require("express");
const getHandler = require("./get");

const router = express.Router();

router.get("/", getHandler);

module.exports = router;
