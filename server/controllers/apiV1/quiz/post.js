const { insert: insertQuiz } = require("../../../db/queries/quiz");
const { insert: insertQuestion } = require("../../../db/queries/question");
const { insert: insertAnswer } = require("../../../db/queries/answer");

module.exports = async (req, res) => {
  try {
    const {
      quiz: { subject, description, tags, title },
      questions,
    } = req.body;

    // Skip accessing the database if the payload is not structured correctly
    if (
      !Array.isArray(subject) ||
      subject.length === 0 ||
      !description ||
      !Array.isArray(tags) ||
      tags.legnth === 0 ||
      !title ||
      !Array.isArray(questions) ||
      questions.length !== 10 ||
      questions.filter(q => {
        const { question, answers } = q;
        if (
          !question ||
          !Array.isArray(answers) ||
          answers.length !== 4 ||
          answers.filter(a => {
            const { answer, isCorrect } = a;
            if (!answer || (isCorrect !== "true" && isCorrect !== "false")) {
              return false;
            }
            return true;
          }).length !== 4
        ) {
          return false;
        }
        return true;
      }).length !== 10
    ) {
      return res.status(400).json({
        message:
          "Payload is malformed. Please consult /server/quiz_examples/javascript_quiz.json",
      });
    }

    const [{ id: quizId }] = await insertQuiz({
      subject,
      description,
      tags,
      title,
    });

    await Promise.all(
      questions.map(async question => {
        const { question: questionPrompt, answers } = question;

        const [{ id: questionId }] = await insertQuestion({
          quiz: quizId,
          prompt: questionPrompt,
        });

        await Promise.all(
          answers.map(async answer => {
            const { answer: answerPrompt, isCorrect } = answer;

            await insertAnswer({
              question: questionId,
              prompt: answerPrompt,
              isCorrect,
            });
          })
        );
      })
    );

    return res.json({ message: "Quiz uploaded successfully" });
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error(err);
    return res.status(500).json({ message: err.message });
  }
};
