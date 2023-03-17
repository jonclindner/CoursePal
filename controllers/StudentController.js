const { Course, Student, Grade } = require('../models')
const { Op, fn, col } = require('sequelize')

const CreateStudent = async (req, res) => {
	try {
		console.log('we hit the controller')
		let student = await Student.create(req.body)
		res.send(student)
	} catch (error) {
		throw error
	}
}

const GetStudents = async (req, res) => {
  try {
    const students = await Student.findAll()
    res.send(students)
  } catch (error) {
    throw error
  }
}

module.exports = {
	CreateStudent,
  GetStudents,
}
