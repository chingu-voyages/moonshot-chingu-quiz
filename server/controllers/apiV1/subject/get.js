const { select } = require("../../../db/queries/subject");

module.exports = async (req, res) => {
  try {
    const subjects = await select();
    res.json(subjects);
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error(err);
    res.status(500).json({ message: err.message });
  }
};
