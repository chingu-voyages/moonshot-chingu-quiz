const {
  selectById,
  selectByQuizId,
  selectByQuizAndQuestionId,
} = require("./select");
const { insert } = require("./insert");

module.exports = {
  selectById,
  selectByQuizId,
  selectByQuizAndQuestionId,
  insert,
};
