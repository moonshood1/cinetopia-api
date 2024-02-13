const Article = require("../../../models/Article");

const switchArticleState = (req, res, next) => {
  try {
    return res.status(200).json({
      success: true,
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

module.exports = { switchArticleState };
