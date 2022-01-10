const mongoose = require("mongoose");

const CommentSchema = new mongoose.Schema({
  //사용자 ID
  userId: {
    type: String,
    required: true,
  },

  //평점
  rating: {
    type: Number,
    required: true,
  },

  //내용
  comment: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Comment", CommentSchema);
