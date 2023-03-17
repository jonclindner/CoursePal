const { Course, Student, Grade } = require('../models')
const { Op, fn, col } = require('sequelize')

const CreateGrade = async (req, res) => {
	try {
		console.log('we hit the grade controller')
		let grade = await Grade.create(req.body)
		res.send(grade)
	} catch (error) {
		throw error
	}
}

module.exports = {
  CreateGrade,
}