const express = require("express");
const app = express();
const dotenv = require("dotenv");
const dbConnect = require("./config/dbConnect");
dotenv.config();
const authRouter = require("./routes/authRouter");
const userRouter = require("./routes/userRouter");
const productRouter = require("./routes/productRouter");
const { errorHandler } = require("./middlewares/errorMiddleware");
dbConnect();

app.use(express.json());
app.use("/api/auth", authRouter);
app.use("/api/users", userRouter);
app.use("/api/products", productRouter);

app.use(errorHandler);

app.listen(process.env.PORT || 5000, () => {
  console.log("Server is running");
});
