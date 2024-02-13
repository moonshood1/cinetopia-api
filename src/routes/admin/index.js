const express = require("express");

const {
  editArticle,
  deleteArticle,
  createArticle,
  publishArticle,
  editPassword,
  sendNotificationsToUsers,
  switchUserState,
  switchArticleState,
  createQuizz,
  editQuizz,
  deleteQuizz,
  publishQuizz,
  createCategory,
  editCategory,
  deleteCategory,
  getQuizz,
  getArticle,
  getCategory,
  getUser,
  getQuote,
  createQuote,
  editQuote,
  deleteQuote,
} = require("./controller");
const { adminToken } = require("../../services/auth");

const router = express.Router();

router
  .use("/articles", adminToken)
  .route("/articles")
  .get(getArticle)
  .put(editArticle)
  .delete(deleteArticle)
  .post(createArticle)
  .patch(publishArticle);

router
  .use("/quizz", adminToken)
  .route("/quizz")
  .get(getQuizz)
  .post(createQuizz)
  .put(editQuizz)
  .delete(deleteQuizz)
  .patch(publishQuizz);

router
  .use("/category", adminToken)
  .route("/category")
  .get(getCategory)
  .post(createCategory)
  .put(editCategory)
  .delete(deleteCategory);

router
  .use("/quote", adminToken)
  .route("/quote")
  .get(getQuote)
  .post(createQuote)
  .put(editQuote)
  .delete(deleteQuote);

router.get("/user", adminToken, getUser);
router.put("/password", adminToken, editPassword);
router.post("/notifications", adminToken, sendNotificationsToUsers);
router.put("/user-state", adminToken, switchUserState);
router.put("/article-state", adminToken, switchArticleState);

module.exports = router;
