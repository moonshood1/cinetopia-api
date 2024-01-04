const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ParagraphSchema = new Schema({
  type: {
    type: String,
    required: true,
    enum: ["text", "img", "titleWithText", "imgWithText", "allIn"],
  },
  title: {
    type: String,
    required: false,
  },
  img: {
    type: String,
    required: false,
  },
  text: {
    type: String,
    required: false,
  },
});

const ArticleSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    articleTitle: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    cover: {
      type: String,
      required: true,
    },
    duration: {
      type: String,
      required: true,
    },
    author: {
      type: Schema.Types.ObjectId,
      ref: "Admin",
    },
    type: {
      type: Schema.Types.ObjectId,
      ref: "Type",
    },
    status: {
      type: Schema.Types.ObjectId,
      ref: "Status",
    },
    content: [ParagraphSchema],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Article", ArticleSchema);
