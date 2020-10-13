const express = require("express");
const { get, getById, post } = require("../../controllers/apiV1/quiz");
const {
  getByQuizId: getQuestionByQuizId,
  post: postQuestion,
} = require("../../controllers/apiV1/question");

const router = express.Router();

router.get("/", get);
router.get("/:id", getById);
router.get("/:id/question", getQuestionByQuizId);
router.post("/", post);
router.post("/:id/question", postQuestion);

module.exports = router;
