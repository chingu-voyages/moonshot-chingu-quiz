const { selectByQuizId } = require("../../../db/queries/question");
const { selectById: selectQuizById } = require("../../../db/queries/quiz");

module.exports = async (req, res) => {
  try {
    const { id } = req.params;
    const verifyQuiz = await selectQuizById({ id });

    if (verifyQuiz.includes(undefined)) {
      return res.status(400).json({ message: `${id} is not a valid quiz id` });
    }

    const questions = await selectByQuizId({ id });
    return res.json(questions);
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error(err);
    return res.status(500).json({ message: err.message });
  }
};
