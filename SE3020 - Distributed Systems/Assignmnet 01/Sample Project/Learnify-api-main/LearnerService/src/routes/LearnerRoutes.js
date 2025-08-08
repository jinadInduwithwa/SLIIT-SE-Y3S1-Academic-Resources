/**
 * @description - Route file responsible for the learner processes
 */

//Requires
const express = require("express");
const router = express.Router();
const {
  enrolledCourses,
  completedCoursesList,
} = require("../services/LearnerService");

router.get("/completed/:id", async (req, res) => {
  await completedCoursesList(req, res);
});

router.get("/enrolled/:id", async (req, res) => {
  await enrolledCourses(req, res);
});
//Exporting router to be used by the app.js
module.exports = router;
