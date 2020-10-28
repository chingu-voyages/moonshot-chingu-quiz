const { selectRandomQuizzes } = require("../../../db/queries/quiz");

module.exports = async (req, res) => {
  try {
    const { num } = req.params;
    const quizzes = await selectRandomQuizzes({ num });
    res.json(quizzes);
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error(err);
    res.status(500).json({ message: err.message });
  }
};
