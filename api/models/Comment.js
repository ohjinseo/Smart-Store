const mongoose = require("mongoose");

const CommentSchema = new mongoose.Schema(
  {
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

    isDeleted: {
      type: Boolean,
      default: false,
    },

    parentId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Comment",
    },
  },
  { timestamps: true }
);

CommentSchema.virtual("childComments")
  .get(function () {
    return this.childComments;
  })
  .set(function (c) {
    this.childComments = c;
  });

module.exports = mongoose.model("Comment", CommentSchema);
