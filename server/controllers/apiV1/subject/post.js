const { insert } = require("../../../db/queries/subject");

module.exports = async (req, res) => {
  try {
    const { title } = req.body;
    if (!title) {
      return res.status(400).json({ message: "title property is required" });
    }
    const subject = await insert({ title });
    return res.json(subject);
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error(err);
    return res.status(500).json({ message: err.message });
  }
};
