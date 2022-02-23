const express = require("express");
const app = express();
const dotenv = require("dotenv");
const dbConnect = require("./config/dbConnect");
dotenv.config();
const authRouter = require("./routes/authRouter");
const userRouter = require("./routes/userRouter");
const cartRouter = require("./routes/cartRouter");
const productRouter = require("./routes/productRouter");
const orderRouter = require("./routes/orderRouter");
const stripeRouter = require("./routes/stripeRouter");
const { errorHandler } = require("./middlewares/errorMiddleware");
const cors = require("cors");
dbConnect();

app.use(cors());
app.use(express.json());
app.use("/api/auth", authRouter);
app.use("/api/users", userRouter);
app.use("/api/products", productRouter);
app.use("/api/carts", cartRouter);
app.use("/api/orders", orderRouter);
app.use("/api/checkout", stripeRouter);

app.use(errorHandler);

app.listen(process.env.PORT || 5000, () => {
  console.log("Server is running");
});
