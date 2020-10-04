const db = require("../../../db");

module.exports = async (req, res) => {
  try {
    const constructedResponse = [];
    const { answerIds } = req.query;

    if (!Array.isArray(answerIds) || answerIds.length < 1) {
      return res.status(400).json({
        message:
          "Payload should be an array in the form of URL parameters." +
          "Please format as such: " +
          "/api/v1/answer?answerIds=ID1HERE&answerIds=ID2HERE...&answerIds=IDNHERE",
      });
    }

    await Promise.all(
      answerIds.map(async answerId => {
        const {
          rows: [{ question: questionId, is_correct: isCorrect }],
        } = await db.query(
          "SELECT question, is_correct FROM answer WHERE id = $1",
          [answerId]
        );

        const {
          rows: [{ explanation, resources }],
        } = await db.query(
          "SELECT explanation, resources FROM question WHERE id = $1",
          [questionId]
        );

        constructedResponse.push({
          id: answerId,
          isCorrect,
          explanation,
          resources,
        });
      })
    );

    return res.json(constructedResponse);
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error(err);
    return res.status(500).json({ message: err.message });
  }
};
