const db = require("../..");

exports.select = async () => {
  const { rows } = await db.query("SELECT * FROM tags");
  return rows;
};

exports.selectById = async ({ id }) => {
  const { rows } = await db.query("SELECT * FROM tags WHERE id = $1", [id]);
  return rows;
};
