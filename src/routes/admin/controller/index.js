const { createArticle } = require("./createArticle");
const { editArticle } = require("./editArticle");
const { deleteArticle } = require("./deleteArticle");
const { publishArticle } = require("./publishArticle");
const { switchArticleState } = require("./switchArticleState");
const { editPassword } = require("./editPassword");
const { sendNotificationsToUsers } = require("./sendNotificationsToUsers");
const { switchUserState } = require("./switchUserState");
const { editAdminPermissions } = require("./editAdminPermissions");
const { createQuote } = require("./createQuote");
const { editQuote } = require("./editQuote");
const { createQuizz } = require("./createQuizz");
const { editQuizz } = require("./editQuizz");
const { publishQuizz } = require("./publishQuizz");
const { switchQuizzState } = require("./switchQuizzState");
const { deleteQuizz } = require("./deleteQuizz");
const { createCategory } = require("./createCategory");
const { editCategory } = require("./editCategory");
const { deleteCategory } = require("./deleteCategory");

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
  createQuote,
  editQuote,
  createQuizz,
  editQuizz,
  deleteQuizz,
  switchQuizzState,
  createCategory,
  editCategory,
  deleteCategory,
  publishQuizz,
};
