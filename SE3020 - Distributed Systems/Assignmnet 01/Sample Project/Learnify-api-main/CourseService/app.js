const express = require("express");
const cors = require("cors");
const AppError = require("./src/utils/AppError");
const errorHandler = require("./src/middlewares/errorHandler");
const courseRoutes = require("./src/routes/courseRoutes");
const connectDB = require("./config/database");
const guestRoutes = require("./src/routes/guestRoutes");
const enrollRoutes = require("./src/routes/enrollmentRoutes");

const app = express();
connectDB.getInstance();
app.use(cors());
app.use(express.json());

//Add routes here
app.use("/", courseRoutes);
app.use("/enroll", enrollRoutes);
app.use("/guest-routes", guestRoutes);

app.use(errorHandler);

app.all("*", (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});
//Exporting app to be used by the server.js
module.exports = app;
