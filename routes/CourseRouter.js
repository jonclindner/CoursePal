const Router = require('express').Router()
const controller = require('../controllers/CourseController')


Router.post('/createCourse', controller.CreateCourse)

module.exports = Router
