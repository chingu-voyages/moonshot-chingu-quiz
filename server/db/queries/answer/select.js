const db = require("../..");

exports.selectById = async ({ id }) => {
  const { rows } = await db.query("SELECT * FROM answer WHERE id = $1", [id]);
  return rows;
};

exports.selectByQuizAndQuestionId = async ({ quizId, questionId }) => {
  const {
    rows,
  } = await db.query("SELECT * FROM answer WHERE question = $1 AND quiz = $2", [
    questionId,
    quizId,
  ]);
  return rows;
};
