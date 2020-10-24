const db = require("../..");

exports.select = async () => {
  const { rows } = await db.query("SELECT * FROM quiz");
  return rows;
};

exports.selectRandomQuizzes = async ({ num }) => {
  const {
    rows,
  } = await db.query("SELECT * FROM quiz ORDER BY RANDOM() LIMIT $1", [num]);
  return rows;
};

exports.selectById = async ({ id }) => {
  const { rows } = await db.query("SELECT * FROM quiz WHERE id = $1", [id]);
  return rows;
};
