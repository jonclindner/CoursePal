const Router = require('express').Router()
const controller = require('../controllers/GradeController')

Router.post('/createGrade', controller.CreateGrade)


module.exports = Router