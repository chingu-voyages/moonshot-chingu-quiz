const {
  selectById: selectByQuizAndQuestionId,
} = require("../../../db/queries/question");
const { selectById: selectQuizById } = require("../../../db/queries/quiz");
const {
  selectByQuizAndQuestionId: selectAnswerByQuizAndQuestionId,
} = require("../../../db/queries/answer");

module.exports = async (req, res) => {
  try {
    const { id, questionId } = req.params;

    const verifyQuiz = await selectQuizById({ id });

    if (verifyQuiz.includes(undefined)) {
      return res.status(400).json({ message: `${id} is not a valid quiz id` });
    }

    const verifyQuestion = await selectByQuizAndQuestionId({
      id: questionId,
      quizId: id,
    });

    if (verifyQuestion.includes(undefined)) {
      return res.status(400).json({
        message: `${questionId} and/or ${id} are not valid ids for question and quiz respectively`,
      });
    }

    const answers = await selectAnswerByQuizAndQuestionId({
      questionId,
      quizId: id,
    });

    return res.json(answers);
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error(err);
    return res.status(500).json({ message: err.message });
  }
};
