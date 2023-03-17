const Router = require('express').Router()
const StudentRouter = require('./StudentRouter')
const CourseRouter = require('./CourseRouter')




Router.use('/student', StudentRouter)
Router.use('/course', CourseRouter)



module.exports = Router