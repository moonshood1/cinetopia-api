const User = require("../../../models/User");
const moment = require("moment");

const resetPassword = async ({ body }, res, next) => {
  try {
    const user = await User.findOne({
      passCode: {
        code: body.code,
      },
    });

    if (!user) {
      return res.status(400).json({
        success: false,
        message: "",
      });
    }

    // await User

    return res.status(200).json({
      success: true,
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

module.exports = { resetPassword };
