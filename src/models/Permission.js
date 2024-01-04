const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const PermissionSchema = new Schema(
  {
    label: {
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

module.exports = mongoose.model("Permission", PermissionSchema);
