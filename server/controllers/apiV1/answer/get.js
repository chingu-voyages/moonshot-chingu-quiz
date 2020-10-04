const { selectById: selectAnswerById } = require("../../../db/queries/answer");
const {
  selectById: selectQuestionById,
} = require("../../../db/queries/question");

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
        const [
          { question: questionId, is_correct: isCorrect },
        ] = await selectAnswerById(answerId);

        const [{ explanation, resources }] = await selectQuestionById(
          questionId
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
