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

const UpdateStudent = async (req, res) => {
  try {
    let studentId = req.params.student_id
    let updatedStudent = await Student.update(req.body, {
      where: { id: studentId },
      returning: true
    })
    res.send(updatedStudent)
  } catch (error) {
    throw error
  }
}


const DeleteStudent = async (req, res) => {
  try {
    let studentId = req.params.student_id
    await Student.destroy({ 
      where: { id: studentId }
     })
    res.send({ message: `Deleted Student with an ID of ${studentId}!` })
  } catch (error) {
    throw error
  }
}

module.exports = {
	CreateStudent,
  GetStudents,
  UpdateStudent,
  DeleteStudent
}
