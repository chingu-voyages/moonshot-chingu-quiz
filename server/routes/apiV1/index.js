const express = require("express");
const quiz = require("./quiz");
const subject = require("./subject");
const tag = require("./tag");

const router = express.Router();

router.use("/quiz", quiz);
router.use("/subject", subject);
router.use("/tag", tag);

module.exports = router;
