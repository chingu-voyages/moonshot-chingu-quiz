const { selectById } = require("../../../db/queries/subject");

module.exports = async (req, res) => {
  try {
    const { id } = req.params;
    const subject = await selectById({ id });
    res.json(subject);
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error(err);
    res.status(500).json({ message: err.message });
  }
};
