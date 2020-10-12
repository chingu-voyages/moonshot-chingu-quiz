const express = require("express");
const quiz = require("./quiz");
const answer = require("./answer");
const subject = require("./subject");
const tags = require("./tags");

const router = express.Router();

router.use("/quiz", quiz);
router.use("/answer", answer);
router.use("/subject", subject);
router.use("/tags", tags);

module.exports = router;
