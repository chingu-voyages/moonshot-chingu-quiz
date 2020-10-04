const db = require("../..");

exports.selectById = async id => {
  const { rows } = await db.query("SELECT * FROM question WHERE id = $1", [id]);
  return rows;
};

exports.selectByQuizId = async quizId => {
  const { rows } = await db.query("SELECT * FROM question WHERE quiz = $1", [
    quizId,
  ]);
  return rows;
};
