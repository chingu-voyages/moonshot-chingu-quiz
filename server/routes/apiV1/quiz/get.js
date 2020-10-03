const db = require("../../../db");

module.exports = async (req, res) => {
  try {
    const constructedResponse = [];

    const { rows: quizResults } = await db.query("SELECT * FROM quiz");

    await Promise.all(
      quizResults.map(async (quizResult, i) => {
        constructedResponse.push(quizResult);
        constructedResponse[i].questions = [];

        const { id: quizId } = quizResult;
        const {
          rows: questionResults,
        } = await db.query("SELECT * FROM question WHERE quiz = $1", [quizId]);

        await Promise.all(
          questionResults.map(
            async (
              {
                id: questionId,
                prompt: questionPrompt,
                explanation,
                resources,
              },
              j
            ) => {
              constructedResponse[i].questions.push({
                id: questionId,
                prompt: questionPrompt,
                explanation,
                resources,
                answers: [],
              });

              const {
                rows: answerResults,
              } = await db.query("SELECT * FROM answer WHERE question = $1", [
                questionId,
              ]);

              answerResults.forEach(({ id: answerId, prompt: answerPrompt }) =>
                constructedResponse[i].questions[j].answers.push({
                  id: answerId,
                  prompt: answerPrompt,
                })
              );
            }
          )
        );
      })
    );

    res.json(constructedResponse);
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error(err);
    res.status(500).json({ message: err.message });
  }
};
