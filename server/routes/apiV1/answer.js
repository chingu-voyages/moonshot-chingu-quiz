const express = require("express");
const { get } = require("../../controllers/apiV1/answer");

const router = express.Router();

router.get("/", get);

module.exports = router;
