const Course = require("../models/courseModel");
const AppError = require("../utils/AppError");
const catchAsync = require("../utils/catchAsync");

const createCourse = catchAsync(async (req, res, next) => {
  const {
    title,
    description,
    instructor,
    duration,
    coverImage,
    price,
    tags,
    lessons,
  } = req.body;

  const existingCourse = await Course.findOne({ title: title });
  if (existingCourse) {
    return next(new AppError("Course already exists!", 400));
  }

  const newCourse = new Course({
    title,
    description,
    instructor,
    duration,
    coverImage,
    price,
    tags,
    createdBy: req.user.userId,
    createdAt: new Date(),
    lessons,
  });

  const savedCourse = await newCourse.save();
  res.status(201).json({
    data: savedCourse,
    message: "Course Created",
  });
});

const getAllCourses = catchAsync(async (req, res, next) => {
  const courses = await Course.find();
  res.status(200).json({
    status: "success",
    data: courses,
  });
});

const getCoursesByUser = catchAsync(async (req, res, next) => {
  const courses = await Course.find({ createdBy: req.user.userId });
  res.status(200).json({
    status: "success",
    data: courses,
  });
});

const getOneCourse = catchAsync(async (req, res, next) => {
  const courseId = req.params.id;
  const course = await Course.findOne({ _id: courseId });

  if (!course) {
    return next(new AppError("Course Not Found!", 404));
  }
  res.status(201).json({
    status: "success",
    course,
  });
});

const updateCourse = catchAsync(async (req, res, next) => {
  const courseId = req.params.id;
  console.log(courseId);
  const updatedDetails = req.body;
  console.log(updatedDetails);

  const course = await Course.findOneAndUpdate(
    { _id: courseId }, // Filter criteria
    { $set: updatedDetails }, // Update data using $set operator
    { new: true } // Return the updated document
  );

  if (!course) {
    return next(new AppError("Course Not Found!", 404));
  }
  res.status(201).json({
    status: "success",
    data: {
      course,
    },
  });
});

const deleteCourse = catchAsync(async (req, res, next) => {
  const courseId = req.params.id;
  const course = await Course.findOneAndDelete({ _id: courseId });

  if (!course) {
    return next(new AppError("Course Not Found!", 404));
  }
  res.status(204).end();
});

const approveCourse = catchAsync(async(req,res,next) => {
  const courseId = req.params.id
  const updateBody = {
    authorized: req.body.authorized
  }
  const response = await Course.findByIdAndUpdate(courseId, updateBody)
  if (!response) {
    return next(new AppError("Course Not Approved correctly!", 500));
  }
  res.status(201).end();
})

const getCourseByApproval = catchAsync(async(req,res,next) => {

  const approvedState = req.params.id
  const coursesList = await Course.find({authorized: approvedState})

  if (coursesList.length < 1) {
    return next(new AppError("No pending courses!", 404));
  }
  res.status(201).json(coursesList);
})

module.exports = {
  createCourse,
  getAllCourses,
  updateCourse,
  deleteCourse,
  getOneCourse,
  getCoursesByUser,
  approveCourse,
  getCourseByApproval,
};
