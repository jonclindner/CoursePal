const { Course, Student, Grade } = require('../models')
const { Op, fn, col } = require('sequelize')

const CreateCourse = async (req, res) => {
	try {
		console.log('we hit the course controller')
		let course = await Course.create(req.body)
		res.send(course)
	} catch (error) {
		throw error
	}
}

const GetCourses = async (req, res) => {
  try {
    const courses = await Course.findAll()
    res.send(courses)
  } catch (error) {
    throw error
  }
}

const UpdateCourse = async (req, res) => {
  try {
    let courseId = req.params.course_id
    let updatedCourse = await Course.update(req.body, {
      where: { id: courseId },
      returning: true
    })
    res.send(updatedCourse)
  } catch (error) {
    throw error
  }
}

module.exports = {
  CreateCourse,
  GetCourses,
  UpdateCourse

}