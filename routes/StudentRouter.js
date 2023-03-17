const Router = require('express').Router()
const controller = require('../controllers/StudentController')


Router.post('/createStudent', controller.CreateStudent)
Router.get('/', controller.GetStudents)

module.exports = Router
