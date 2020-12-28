const db = require("../..");

exports.update = async ({ id, subject, description, tag, title }) => {
  const {
    rows,
  } = await db.query(
    "UPDATE quiz SET subject = $1, description = $2, tag = $3, title = $4 WHERE id = $5 RETURNING *",
    [subject, description, tag, title, id]
  );
  return rows;
};
