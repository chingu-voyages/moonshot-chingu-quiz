const { insert: insertAnswer } = require("../../../db/queries/answer");
const { selectById: selectQuizById } = require("../../../db/queries/quiz");
const {
  selectById: selectQuestionById,
} = require("../../../db/queries/question");

module.exports = async (req, res) => {
  try {
    const { id, questionId } = req.params;
    const { prompt, isCorrect } = req.body;

    if (typeof prompt !== "string" || !prompt) {
      return res
        .status(400)
        .json({ message: "prompt property is required as non-empty string" });
    }

    if (isCorrect !== "true" && isCorrect !== "false") {
      return res.status(400).json({
        message:
          'isCorrect property is required as type string with value "true" or "false"',
      });
    }
    const verifyQuiz = await selectQuizById({ id });

    if (verifyQuiz.includes(undefined)) {
      return res.status(400).json({ message: `${id} is not a valid quiz id` });
    }

    const verifyQuestion = await selectQuestionById({ id: questionId });

    if (verifyQuestion.includes(undefined)) {
      return res
        .status(400)
        .json({ message: `${questionId} is not a valid question id` });
    }

    const answer = await insertAnswer({
      quiz: id,
      question: questionId,
      prompt,
      isCorrect,
    });

    return res.json(answer);
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error(err);
    return res.status(500).json({ message: err.message });
  }
};
