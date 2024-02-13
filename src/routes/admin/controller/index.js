const { getArticle } = require("./getArticle");
const { createArticle } = require("./createArticle");
const { editArticle } = require("./editArticle");
const { deleteArticle } = require("./deleteArticle");
const { publishArticle } = require("./publishArticle");
const { switchArticleState } = require("./switchArticleState");
const { editPassword } = require("./editPassword");
const { getUser } = require("./getUser");
const { sendNotificationsToUsers } = require("./sendNotificationsToUsers");
const { switchUserState } = require("./switchUserState");
const { editAdminPermissions } = require("./editAdminPermissions");
const { getQuote } = require("./getQuote");
const { createQuote } = require("./createQuote");
const { editQuote } = require("./editQuote");
const { deleteQuote } = require("./deleteQuote");
const { getQuizz } = require("./getQuizz");
const { createQuizz } = require("./createQuizz");
const { editQuizz } = require("./editQuizz");
const { publishQuizz } = require("./publishQuizz");
const { switchQuizzState } = require("./switchQuizzState");
const { deleteQuizz } = require("./deleteQuizz");
const { getCategory } = require("./getCategory");
const { createCategory } = require("./createCategory");
const { editCategory } = require("./editCategory");
const { deleteCategory } = require("./deleteCategory");

module.exports = {
  getArticle,
  createArticle,
  editArticle,
  deleteArticle,
  publishArticle,
  switchArticleState,
  editPassword,
  getUser,
  sendNotificationsToUsers,
  switchUserState,
  editAdminPermissions,
  getQuote,
  createQuote,
  editQuote,
  getQuizz,
  createQuizz,
  editQuizz,
  deleteQuizz,
  switchQuizzState,
  getCategory,
  createCategory,
  editCategory,
  deleteCategory,
  publishQuizz,
  deleteQuote,
};
