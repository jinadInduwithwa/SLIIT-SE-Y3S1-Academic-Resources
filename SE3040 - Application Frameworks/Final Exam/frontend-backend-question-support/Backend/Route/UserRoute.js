import express from "express";
const router = express.Router();

import User from "../Model/UserModel.js";         
import UserController from "../Controllers/UserController.js"; 

router.get("/", UserController.getAllUsers);
router.get("/search", UserController.search);
router.get("/filter", UserController.searchAndFilter);

router.post("/", UserController.addUser);


router.get("/:id", UserController.getById);
router.patch("/:id", UserController.updatebyId);
router.delete("/:id", UserController.deleteById);
export default router;
