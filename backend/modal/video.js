const mongoose = require("mongoose");
const { Schema } = mongoose;
const videoSchema = new Schema({
  api: {
    type: String,
    require: true,
  },
  tag: {
    type: String,
    require: true,
  },
});

module.exports = mongoose.model("video", videoSchema);
