const User = require("../../../models/User");
const _ = require("lodash");
const moment = require("moment");

const initPasswordReset = async ({ body }, res, next) => {
  try {
    const { email } = body;

    const user = await User.findOne({
      email,
    });

    if (!user) {
      return res.status(400).json({
        success: false,
        message: "L'adresse email saisie n'est pas enregistrée",
      });
    }

    if (
      user.passCode &&
      user.passCode.expiredAt &&
      moment(user.passCode.expiredAt).isAfter(moment())
    ) {
      return res.status(400).json({
        success: false,
        message:
          "Vous avez deja une demande de réinitialisation en cours, veuillez recupérer le code",
      });
    }

    await User.updateOne(
      {
        _id: user._id,
      },
      {
        $set: {
          passCode: {
            expiredAt: "",
            code: "",
          },
        },
      }
    );

    return res.status(200).json({
      success: true,
      message: "Un code de verification a été envoyé sur votre adresse email",
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

module.exports = {
  initPasswordReset,
};
