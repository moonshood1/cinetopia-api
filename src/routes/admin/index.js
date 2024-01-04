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
} = require("./controller");

const router = express.Router();

router
  .route("/articles")
  .put(editArticle)
  .delete(deleteArticle)
  .post(createArticle)
  .patch(publishArticle);

router.put("/password", editPassword);
router.post("/notifications", sendNotificationsToUsers);
router.put("/user-state", switchUserState);
router.put("/article-state", switchArticleState);

module.exports = router;
