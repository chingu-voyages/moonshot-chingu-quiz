const express = require("express");
const quizRoute = require("./quiz");

const router = express.Router();

router.use("/quiz", quizRoute);

module.exports = router;
