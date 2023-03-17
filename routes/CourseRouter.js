const Router = require('express').Router()
const controller = require('../controllers/CourseController')


Router.post('/createCourse', controller.CreateCourse)
Router.get('/', controller.GetCourses)
Router.get('/:student_id', controller.GetCourseByStudentId)
Router.put('/:course_id', controller.UpdateCourse)
Router.delete('/:course_id', controller.DeleteCourse)

module.exports = Router
