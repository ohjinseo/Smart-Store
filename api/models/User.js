const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    //이름
    name: {
      type: String,
      required: true,
      maxlength: 50,
    },

    //이메일
    email: {
      type: String,
      required: true,
      unique: true,
    },

    //패스워드
    password: {
      type: String,
      required: true,
      minlength: 6,
    },

    //소개
    desc: {
      type: String,
    },

    //판매자 여부
    isSeller: {
      type: Boolean,
      default: false,
    },

    //관리자 여부
    isAdmin: {
      type: Boolean,
      default: false,
    },

    //팔로워
    followers: {
      type: Array,
      default: [],
    },

    //팔로잉
    followings: {
      type: Array,
      default: [],
    },

    //포인트
    point: {
      type: Number,
      default: 0,
    },

    //유저 사진
    img: {
      type: String,
    },

    //내가 판매하고 있는 상품
    products: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);
