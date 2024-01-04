const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const QuoteSchema = new Schema(
  {
    author: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
    admin: {
      type: Schema.Types.ObjectId,
      ref: "Admin",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Quote", QuoteSchema);
