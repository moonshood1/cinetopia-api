const { createArticle } = require("./createArticle");
const { editArticle } = require("./editArticle");
const { deleteArticle } = require("./deleteArticle");
const { publishArticle } = require("./publishArticle");
const { switchArticleState } = require("./switchArticleState");
const { editPassword } = require("./editPassword");
const { sendNotificationsToUsers } = require("./sendNotificationsToUsers");
const { switchUserState } = require("./switchUserState");
const { editAdminPermissions } = require("./editAdminPermissions");

module.exports = {
  createArticle,
  editArticle,
  deleteArticle,
  publishArticle,
  switchArticleState,
  editPassword,
  sendNotificationsToUsers,
  switchUserState,
  editAdminPermissions,
};
