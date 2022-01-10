const express = require("express");
const app = express();
const dotenv = require("dotenv");
const dbConnect = require("./config/dbConnect");
dotenv.config();

dbConnect();

app.listen(process.env.PORT || 5000, () => {
  console.log("Server is running");
});
