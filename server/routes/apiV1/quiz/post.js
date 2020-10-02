const db = require("../../../db");

module.exports = async (req, res) => {
  try {
    const {
      quiz: { subject, description, tags },
      questions,
    } = req.body;

    const {
      rows: [{ id: quizId }],
    } = await db.query(
      "INSERT INTO quiz(subject, description, tags) VALUES($1, $2, $3) RETURNING *",
      [subject, description, tags]
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

    res.json({ message: "Quiz uploaded successfully" });
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error(err);
    res.status(500).json({ message: err.message });
  }
};
