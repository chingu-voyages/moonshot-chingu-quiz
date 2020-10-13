const db = require("../..");

exports.select = async () => {
  const { rows } = await db.query("SELECT * FROM tag");
  return rows;
};

exports.selectById = async ({ id }) => {
  const { rows } = await db.query("SELECT * FROM tag WHERE id = $1", [id]);
  return rows;
};
