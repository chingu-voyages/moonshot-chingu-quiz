const { update: updateQuiz } = require("../../../db/queries/quiz");
const {
  selectById: selectSubjectById,
} = require("../../../db/queries/subject");
const { selectById: selectTagById } = require("../../../db/queries/tag");
const { selectById: selectQuizById } = require("../../../db/queries/quiz");

module.exports = async (req, res) => {
  try {
    const { id: quizId } = req.params;
    const { subject, description, tag, title } = req.body;

    // return 400 status if payload shape is not valid
    if (quizId === undefined) {
      return res.status(400).json({
        message: "quiz id is required",
      });
    }

    if (!Array.isArray(subject) || subject.length < 1) {
      return res.status(400).json({
        message: "subject property required as array of ids",
      });
    }
    if (typeof description !== "string" || !description) {
      return res.status(400).json({
        message: "description property required as non-empty string",
      });
    }
    if (!Array.isArray(tag) || tag.length < 1) {
      return res.status(400).json({
        message: "tags property required as array of ids",
      });
    }
    if (typeof title !== "string" || !title) {
      return res.status(400).json({
        message: "title property required as non-empty string",
      });
    }

    // return 400 status if id is not a valide quiz id
    const verifyQuiz = await selectQuizById({ id: quizId });

    if (verifyQuiz.length < 1 || verifyQuiz.includes(undefined)) {
      return res.status(400).json({
        message: `${quizId} is not a valid quiz id`,
      });
    }

    // return 400 status if subject or tag is not a valid id
    const verifySubject = await Promise.all(
      subject.map(async id => {
        const [result] = await selectSubjectById({ id });
        return result;
      })
    );

    if (verifySubject.includes(undefined)) {
      return res.status(400).json({
        message: `${
          subject[verifySubject.indexOf(undefined)]
        } is not a valid subject id`,
      });
    }

    const verifyTag = await Promise.all(
      tag.map(async id => {
        const [result] = await selectTagById({ id });
        return result;
      })
    );

    if (verifyTag.includes(undefined)) {
      return res.status(400).json({
        message: `${tag[verifyTag.indexOf(undefined)]} is not a valid tag id`,
      });
    }

    const quiz = await updateQuiz({
      id: quizId,
      subject,
      description,
      tag,
      title,
    });

    return res.json(quiz);
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error(err);
    return res.status(500).json({ message: err.message });
  }
};
