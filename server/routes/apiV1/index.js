const express = require("express");
const quizRouter = require("./quiz");
const answerRouter = require("./answer");

const router = express.Router();

router.use("/quiz", quizRouter);
router.use("/answer", answerRouter);

module.exports = router;
