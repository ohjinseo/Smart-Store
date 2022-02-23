const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
  {
    //이름
    title: {
      type: String,
    },

    //브랜드
    brand: {
      type: String,
    },

    //설명
    desc: {
      type: String,
    },

    //썸네일 사진
    coverPicture: {
      type: String,
    },

    //사진
    img: {
      type: String,
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
    },

    //파는사람
    sellerId: {
      type: mongoose.Schema.Types.ObjectId,
    },

    //상품 댓글
    comments: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Comment",
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", ProductSchema);
