const { selectById } = require("../../../db/queries/quiz");

module.exports = async (req, res) => {
  try {
    const { id } = req.params;
    const quiz = await selectById({ id });
    res.json(quiz);
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error(err);
    res.status(500).json({ message: err.message });
  }
};
