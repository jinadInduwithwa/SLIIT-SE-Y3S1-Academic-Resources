const {
  getCompletedCourses,
  getEnrolledCourses,
} = require("../controller/LearnerController");
const HttpStatus = require("../enums/httpStatus");

exports.completedCoursesList = async (req, res) => {
  //Expects learner id as a param
  const payload = req.params.id;

  const response = await getCompletedCourses(payload);

  if (response.body.length < 1) {
    res.status(HttpStatus.NOT_FOUND).json("No completed courses found!");
  } else {
    res.status(response.status).json(response.body);
  }
};

exports.enrolledCourses = async (req, res) => {
  //Expects learner id as a param
  const payload = req.params.id;

  const response = await getEnrolledCourses(payload);

  if (response.body.length < 1) {
    res.status(HttpStatus.NOT_FOUND).json("Not enrolled in any courses yet!");
  } else {
    res.status(response.status).json(response.body);
  }
};
