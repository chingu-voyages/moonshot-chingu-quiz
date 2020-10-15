const db = require("../..");

exports.insert = async ({ question, prompt, isCorrect, quiz }) => {
  const {
    rows,
  } = await db.query(
    "INSERT INTO answer(question, prompt, is_correct, quiz) VALUES($1, $2, $3, $4) RETURNING *",
    [question, prompt, isCorrect, quiz]
  );
  return rows;
};
