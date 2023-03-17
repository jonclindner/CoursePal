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

module.exports = {
  CreateCourse,

}