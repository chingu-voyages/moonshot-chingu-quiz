const db = require("../..");

exports.insert = async ({ quiz, prompt }) => {
  const {
    rows,
  } = await db.query(
    "INSERT INTO question(quiz, prompt) VALUES ($1, $2) RETURNING *",
    [quiz, prompt]
  );
  return rows;
};
