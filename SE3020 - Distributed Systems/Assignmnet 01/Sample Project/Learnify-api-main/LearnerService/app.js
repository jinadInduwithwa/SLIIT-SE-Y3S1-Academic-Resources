const express = require("express");
const cors = require("cors");
const connectDB = require("./config/database");
const LearnerRoutes = require("./src/routes/LearnerRoutes");
connectDB.getInstance();

const app = express();

app.use(cors());
app.use(express.json());

//Add routes here
app.use("/courses", LearnerRoutes);

//Exporting app to be used by the server.js
module.exports = app;
