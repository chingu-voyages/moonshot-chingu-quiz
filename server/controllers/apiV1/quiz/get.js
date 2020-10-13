const { select } = require("../../../db/queries/quiz");

module.exports = async (req, res) => {
  try {
    const quizzes = await select();

    res.json(quizzes);
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error(err);
    res.status(500).json({ message: err.message });
  }
};
