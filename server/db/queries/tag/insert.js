const db = require("../..");

exports.insert = async ({ title }) => {
  const {
    rows,
  } = await db.query("INSERT INTO tag(title) VALUES($1) RETURNING *", [title]);
  return rows;
};
