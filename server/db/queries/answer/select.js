const db = require("../../index");

module.exports = async id => {
  const { rows } = await db.query("SELECT * FROM answer WHERE id = $1", [id]);
  return rows;
};
