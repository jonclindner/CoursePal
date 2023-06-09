const Router = require('express').Router()
const controller = require('../controllers/StudentController')


Router.post('/createStudent', controller.CreateStudent)
Router.get('/', controller.GetStudents)
Router.get('/:student_id', controller.GetCoursesByStudentId)
Router.put('/:student_id', controller.UpdateStudent)
Router.delete('/:student_id', controller.DeleteStudent)

module.exports = Router
