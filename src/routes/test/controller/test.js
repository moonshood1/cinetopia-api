const test = (req, res, next) => {
  try {
    return res.status(200).json({
      success: true,
      message: "Test effectué",
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

module.exports = { test };
