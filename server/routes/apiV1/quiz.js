const express = require("express");
const { get, post } = require("../../controllers/apiV1/quiz");

const router = express.Router();

router.get("/", get);
router.post("/", post);

module.exports = router;
