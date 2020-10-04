const db = require("../..");

exports.selectById = async id => {
  const { rows } = await db.query("SELECT * FROM answer WHERE id = $1", [id]);
  return rows;
};

exports.selectByQuestionId = async questionId => {
  const { rows } = await db.query("SELECT * FROM answer WHERE question = $1", [
    questionId,
  ]);
  return rows;
};
