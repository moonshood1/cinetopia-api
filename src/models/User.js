const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UserSchema = new Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    picture: {
      type: String,
      required: false,
      default: null,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      default: null,
    },
    status: {
      type: Schema.Types.ObjectId,
      ref: "Status",
    },
    passCode: {
      expiredAt: {
        type: Date,
        default: null,
      },
      code: {
        type: String,
        default: null,
      },
    },
    savedArticles: [
      {
        type: Schema.Types.ObjectId,
        ref: "Article",
      },
    ],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", UserSchema);
