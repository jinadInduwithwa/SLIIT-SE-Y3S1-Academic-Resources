const EnrollmentModel = require("../model/enrollmentModel")
const HTTPStatus = require('../enums/httpStatus')

exports.getEnrolledCourses = async(payload) => {
    try {
        const response = await EnrollmentModel.find({learnerId:payload})
        return { status: HTTPStatus.OK, body: response }
    } catch (error) {

        return { status: HTTPStatus.INTERNAL_SERVER_ERROR, body: error }
        
    }
}

exports.getCompletedCourses = async(payload) => {
    try {
        const response = await EnrollmentModel.find({learnerId:payload, completionLevel:100})
        return { status: HTTPStatus.OK, body: response }
    } catch (error) {

        return { status: HTTPStatus.INTERNAL_SERVER_ERROR, body: error }
        
    }
}