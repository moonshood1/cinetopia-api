const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const QuizzSchema = new Schema(
  {
    title: {
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
    questions: [
      {
        questionText: {
          type: String,
          required: true,
        },
        answers: [
          {
            answerText: {
              type: String,
              required: true,
            },
            isCorrect: {
              type: Boolean,
              required: true,
            },
          },
        ],
      },
    ],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Quizz", QuizzSchema);
