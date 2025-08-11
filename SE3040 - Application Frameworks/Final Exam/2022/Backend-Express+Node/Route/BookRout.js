import express from "express"
const route = express.Router();

import BookControl from "../Controller/BookController.js"

route.get("/",BookControl.getAllBooks);

export default route;