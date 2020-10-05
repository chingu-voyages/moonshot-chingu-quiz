const { select: selectQuiz } = require("../../../db/queries/quiz");
const {
  selectByQuizId: selectQuestionByQuizId,
} = require("../../../db/queries/question");
const {
  selectByQuestionId: selectAnswerByQuestionId,
} = require("../../../db/queries/answer");

module.exports = async (req, res) => {
  try {
    const constructedResponse = [];

    const quizResults = await selectQuiz();

    await Promise.all(
      quizResults.map(async (quizResult, i) => {
        constructedResponse.push(quizResult);
        constructedResponse[i].questions = [];

        const { id: quizId } = quizResult;
        const questionResults = await selectQuestionByQuizId(quizId);

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

              const answerResults = await selectAnswerByQuestionId(questionId);

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
