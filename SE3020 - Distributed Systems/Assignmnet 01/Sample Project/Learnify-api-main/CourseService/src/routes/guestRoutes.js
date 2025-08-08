const express = require("express");
const router = express.Router();
const {
  getAllCourses,
  getOneCourse,
} = require("../controllers/courseController");

router.route("/").get(getAllCourses);
router.route("/:id").get(getOneCourse);
module.exports = router;
