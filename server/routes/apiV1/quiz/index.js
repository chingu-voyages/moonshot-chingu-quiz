const express = require("express");
const getHandler = require("./get");
const postHandler = require("./post");

const router = express.Router();

router.get("/", getHandler);
router.post("/", postHandler);

module.exports = router;
