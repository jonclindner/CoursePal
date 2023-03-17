const Router = require('express').Router()
const controller = require('../controllers/GradeController')

Router.post('/createGrade', controller.CreateGrade)
Router.get('/', controller.GetGrades)
Router.put('/:grade_id', controller.UpdateGrade)


module.exports = Router