const mongoose = require("mongoose");
const postSchema = new mongoose.Schema({
  tweet: {
    type: String,
  },
  userId: {
    type: String,
  },
});

module.exports = mongoose.model("Post", postSchema);
