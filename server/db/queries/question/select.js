const db = require("../..");

exports.selectById = async ({ id }) => {
  const { rows } = await db.query("SELECT * FROM question WHERE id = $1", [id]);
  return rows;
};

exports.selectByQuizId = async ({ id }) => {
  const { rows } = await db.query("SELECT * FROM question WHERE quiz = $1", [
    id,
  ]);
  return rows;
};

exports.selectByQuizAndQuestionId = async ({ quizId, id }) => {
  const {
    rows,
  } = await db.query("SELECT * FROM question WHERE id = $1 AND quiz = $2", [
    id,
    quizId,
  ]);
  return rows;
};
