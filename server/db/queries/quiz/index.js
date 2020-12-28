const { select, selectRandomQuizzes, selectById } = require("./select");
const { insert } = require("./insert");
const { update } = require("./update");

module.exports = {
  select,
  selectRandomQuizzes,
  selectById,
  insert,
  update,
};
