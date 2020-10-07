const db = require("../..");

exports.select = async () => {
  const { rows } = await db.query("SELECT * FROM quiz");
  return rows;
};
