const Router = require('express').Router()
const controller = require('../controllers/CourseController')


Router.post('/createCourse', controller.CreateCourse)
Router.get('/', controller.GetCourses)
Router.put('/:course_id', controller.UpdateCourse)

module.exports = Router
