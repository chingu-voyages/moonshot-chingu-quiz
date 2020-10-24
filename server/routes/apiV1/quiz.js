const express = require("express");
const {
  get,
  getById,
  post,
  getRandomQuizzes,
} = require("../../controllers/apiV1/quiz");
const {
  getByQuizId: getQuestionByQuizId,
  post: postQuestion,
} = require("../../controllers/apiV1/question");
const {
  getByQuestionId: getAnswerByQuestionId,
  post: postAnswer,
} = require("../../controllers/apiV1/answer");

const router = express.Router();

router.get("/", get);
router.get("/random/:num", getRandomQuizzes);
router.get("/:id", getById);
router.get("/:id/question", getQuestionByQuizId);
router.get("/:id/question/:questionId/answer", getAnswerByQuestionId);
router.post("/", post);
router.post("/:id/question", postQuestion);
router.post("/:id/question/:questionId/answer", postAnswer);

module.exports = router;
