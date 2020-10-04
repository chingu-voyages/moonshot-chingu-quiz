const express = require("express");
const quiz = require("./quiz");
const answer = require("./answer");

const router = express.Router();

router.use("/quiz", quiz);
router.use("/answer", answer);

module.exports = router;
