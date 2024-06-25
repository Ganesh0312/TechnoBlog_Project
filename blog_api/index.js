import express from "express";
const app = express();
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
import cookieParser from "cookie-parser";
// import path from "path";

import userRouters from "./routers/userRoute.js";
import authRouter from "./routers/authRouter.js";
import postRoute from "./routers/postRoutes.js";
import commentRoutes from "./routers/commentsRoutes.js";
app.use(express.json());
app.use(cookieParser());

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("Mongodb is Connected ");
  })
  .catch((err) => {
    console.log(err);
  });

app.listen(8080, () => {
  console.log("Server is running on port 8080");
});

app.use("/api/user", userRouters);
app.use("/api/auth", authRouter);
app.use("/api/post", postRoute);
app.use("/api/comment", commentRoutes);

// const __dirname = path.resolve();
// app.use(express.static(path.join(__dirname, "/blog_client/dist")));

// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "blog_client", "dist", "index.html"));
// });

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});
