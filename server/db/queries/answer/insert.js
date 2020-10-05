const db = require("../..");

exports.insert = async ({ question, prompt, isCorrect }) => {
  const {
    rows,
  } = await db.query(
    "INSERT INTO answer(question, prompt, is_correct) VALUES($1, $2, $3)",
    [question, prompt, isCorrect]
  );
  return rows;
};
