/**
 * @description - This file defines the enrollment model for MongoDB
 */

const mongoose = require("mongoose");

// Schema for Courses
const enrollmentSchema = new mongoose.Schema(
  {
    courseId: {
      type: String,
      required: true,
    },
    instructorId: {
      type: String,
      required: true,
    },
    learnerId: {
      type: String,
      required: true,
    },
    completionLevel: {
      type: Number,
      required: true,
      default: 0,
    },
    paymentStatus: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  { collection: "enrollment" }
);

// Creating mongoose model using Schema
const EnrollmentModel = mongoose.model("enroll", enrollmentSchema);

module.exports = EnrollmentModel;
