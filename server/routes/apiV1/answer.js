const express = require("express");
const { get: getAnswer } = require("../../controllers/apiV1/answer");

const router = express.Router();

router.get("/", getAnswer);

module.exports = router;
