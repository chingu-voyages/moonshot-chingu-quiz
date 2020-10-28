const db = require("../..");

exports.select = async () => {
  const { rows } = await db.query("SELECT * FROM subject");
  return rows;
};

exports.selectById = async ({ id }) => {
  const { rows } = await db.query("SELECT * FROM subject WHERE id = $1", [id]);
  return rows;
};
