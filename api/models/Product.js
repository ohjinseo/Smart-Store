const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  //이름
  title: {
    type: String,
    required: true,
  },

  //설명
  desc: {
    type: String,
    required: true,
  },

  //썸네일 사진
  coverPicture: {
    type: String,
    required: true,
  },

  //사진
  img: {
    type: Array,
    default: [],
  },

  //색상
  color: {
    type: Array,
    default: [],
  },

  //크기
  size: {
    type: Array,
    default: [],
  },

  //가격
  price: {
    type: Number,
    required: true,
  },

  //판매량
  sold: {
    type: Number,
    default: 0,
  },

  //카테고리
  categories: {
    type: Array,
    default: [],
  },

  //재고
  stock: {
    type: Number,
    required: true,
  },

  //파는사람
  sellerId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },

  //상품 댓글
  comments: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Comment",
    },
  ],
});

module.exports = mongoose.model("Product", ProductSchema);
