const express = require("express");
const cors = require("cors");
const connectDB = require("./config/database");
const Router = require("./src/routers/Routers");

connectDB.getInstance();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/", Router);

//Exporting app to be used by the server.js
module.exports = app;
