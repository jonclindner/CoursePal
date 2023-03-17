'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Course extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // Course.hasMany(models.Student, {
      //   foreignKey: 'student_Id2',
      //   as: 'course_list',
      //   onDelete: 'CASCADE',
      //   onUpdate: 'CASCADE'
      // })
      Course.hasMany(models.Grade, {
        foreignKey: 'gradeId',
        as: 'grades',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      })
      Course.belongsToMany(models.Student, {
        as: 'courseList',
        through: models.Course_List,
        foreignKey: 'student_Id3'
      })
      // Course.belongsToMany(models.Grade, {
      //   as: 'courseList',
      //   through: models.CourseList,
      //   foreignKey: 'gradeId'
      // })
    }
  }
  Course.init({
    courseName: DataTypes.STRING,
    courseNumber: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Course',
    tableName: 'courses'
  });
  return Course;
};