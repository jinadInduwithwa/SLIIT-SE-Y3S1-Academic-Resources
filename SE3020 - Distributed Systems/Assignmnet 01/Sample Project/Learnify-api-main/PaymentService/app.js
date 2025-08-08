const express = require("express");
const cors = require("cors");
const connectDB = require("./config/database");
const stripeRouter = require("./src/routes/stripeRouter");

connectDB.getInstance();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/", stripeRouter);

//Add routes here

//Exporting app to be used by the server.js
module.exports = app;
