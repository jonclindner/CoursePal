const Router = require('express').Router()
const controller = require('../controllers/StudentController')


Router.post('/createStudent', controller.CreateStudent)
Router.get('/', controller.GetStudents)
Router.put('/:student_id', controller.UpdateStudent)

module.exports = Router
