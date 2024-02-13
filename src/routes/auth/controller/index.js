const { login } = require("./login");
const { register } = require("./register");
const { resetPassword } = require("./resetPassword");
const { initPasswordReset } = require("./initPasswordReset");

module.exports = {
  login,
  register,
  resetPassword,
  initPasswordReset,
};
