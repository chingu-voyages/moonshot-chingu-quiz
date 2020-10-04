const db = require("../../../db");

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
          "Payload is malformed. Please consult the javascript_quiz.json file in the /server/quiz_examples directory",
      });
    }

    const {
      rows: [{ id: quizId }],
    } = await db.query(
      "INSERT INTO quiz(subject, description, tags, title) VALUES($1, $2, $3, $4) RETURNING *",
      [subject, description, tags, title]
    );

    await Promise.all(
      questions.map(async question => {
        const { question: questionPrompt, answers } = question;
        const {
          rows: [{ id: questionId }],
        } = await db.query(
          "INSERT INTO question(quiz, prompt) VALUES ($1, $2) RETURNING *",
          [quizId, questionPrompt]
        );

        await Promise.all(
          answers.map(async answer => {
            const { answer: answerPrompt, isCorrect } = answer;
            await db.query(
              "INSERT INTO answer(question, prompt, is_correct) VALUES($1, $2, $3)",
              [questionId, answerPrompt, isCorrect]
            );
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
