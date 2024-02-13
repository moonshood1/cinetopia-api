const bcrypt = require("bcrypt");
const User = require("../../../models/User");

const register = async ({ body }, res, next) => {
  try {
    const { firstName, lastName, email, password } = body;

    const user = await User.findOne({
      email: email,
    });

    if (user) {
      return res.status(400).json({
        success: false,
        message: "Vous ne pouvez pa créer de compte avec cette adresse email",
      });
    }

    const cryptedPassword = await bcrypt.hash(password, 10);

    await User.create({
      firstName,
      lastName,
      email,
      password: cryptedPassword,
    });

    return res.status(200).json({
      success: true,
      message:
        "Votre inscription a bien été prise en compte , vous pouvez à present vous connecter",
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

module.exports = { register };
