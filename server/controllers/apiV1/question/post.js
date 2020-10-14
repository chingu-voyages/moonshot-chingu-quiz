const { selectById: selectQuizById } = require("../../../db/queries/quiz");
const { insert: insertQuestion } = require("../../../db/queries/question");

module.exports = async (req, res) => {
  try {
    const { prompt } = req.body;
    const { id } = req.params;

    if (typeof prompt !== "string" || !prompt) {
      return res
        .status(400)
        .json({ message: "prompt property is required as non-empty string" });
    }

    const verifyQuiz = await selectQuizById({ id });

    if (verifyQuiz.includes(undefined)) {
      return res.status(400).json({
        message: `${id} is not a valid quiz id`,
      });
    }

    const question = await insertQuestion({
      quiz: id,
      prompt,
    });

    return res.json(question);
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error(err);
    return res.status(500).json({ message: err.message });
  }
};
