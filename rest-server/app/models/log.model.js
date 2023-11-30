const mongoose = require("mongoose");

const LogSchema = mongoose.Schema(
  {
    user: String,
    action: String,
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Log", LogSchema);
