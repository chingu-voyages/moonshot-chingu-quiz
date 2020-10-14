const db = require("../..");

exports.insert = async ({ subject, description, tag, title }) => {
  const {
    rows,
  } = await db.query(
    "INSERT INTO quiz(subject, description, tag, title) VALUES($1, $2, $3, $4) RETURNING *",
    [subject, description, tag, title]
  );
  return rows;
};
