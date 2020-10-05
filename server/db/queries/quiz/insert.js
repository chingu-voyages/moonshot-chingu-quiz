const db = require("../..");

exports.insert = async ({ subject, description, tags, title }) => {
  const {
    rows,
  } = await db.query(
    "INSERT INTO quiz(subject, description, tags, title) VALUES($1, $2, $3, $4) RETURNING *",
    [subject, description, tags, title]
  );
  return rows;
};
