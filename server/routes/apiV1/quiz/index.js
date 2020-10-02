const express = require("express");
const postHandler = require("./post");

const router = express.Router();

router.post("/", postHandler);

module.exports = router;
