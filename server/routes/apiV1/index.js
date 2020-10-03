const express = require("express");
const quizRouter = require("./quiz");

const router = express.Router();

router.use("/quiz", quizRouter);

module.exports = router;
