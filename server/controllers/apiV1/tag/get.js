const { select } = require("../../../db/queries/tag");

module.exports = async (req, res) => {
  try {
    const tags = await select();
    res.json(tags);
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error(err);
    res.status(500).json({ message: err.message });
  }
};
