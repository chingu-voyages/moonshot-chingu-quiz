const express = require("express");
const {
  get: getQuiz,
  post: postQuiz,
} = require("../../controllers/apiV1/quiz");

const router = express.Router();

router.get("/", getQuiz);
router.post("/", postQuiz);

module.exports = router;
