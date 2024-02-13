const Article = require("../../../models/Article");

const getArticle = async (req, res, next) => {
  try {
    let query = { $ne: null };

    if (req.query.id) {
      query = { $eq: req.query.id };
    }

    const article = await Article.find({
      _id: query,
    });

    return res.status(200).json({
      success: true,
      article,
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

module.exports = { getArticle };
