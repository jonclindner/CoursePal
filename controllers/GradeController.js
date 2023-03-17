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

const GetGrades = async (req, res) => {
  try {
    const grades = await Grade.findAll()
    res.send(grades)
  } catch (error) {
    throw error
  }
}

const UpdateGrade = async (req, res) => {
  try {
    let gradeId = req.params.grade_id
    let updatedGrade = await Grade.update(req.body, {
      where: { id: gradeId },
      returning: true
    })
    res.send(updatedGrade)
  } catch (error) {
    throw error
  }
}

const DeleteGrade = async (req, res) => {
  try {
    let gradeId = req.params.grade_id
    await Grade.destroy({ 
      where: { id: gradeId }
     })
    res.send({ message: `Deleted Student with an ID of ${gradeId}!` })
  } catch (error) {
    throw error
  }
}


module.exports = {
  CreateGrade,
  GetGrades,
  UpdateGrade,
  DeleteGrade
}