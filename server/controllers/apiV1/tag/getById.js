const { selectById } = require("../../../db/queries/tag");

module.exports = async (req, res) => {
  try {
    const { id } = req.params;
    const tag = await selectById({ id });
    res.json(tag);
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error(err);
    res.status(500).json({ message: err.message });
  }
};
