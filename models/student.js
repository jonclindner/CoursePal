'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Student extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Student.belongsToMany(models.Course,{
        foreignKey:'courseId',
        as: 'courses',
        through: models.Grade,
        onDelete: 'cascade',
        onUpdate: 'cascade'
      })
      // Student.hasMany(models.Grade,{
      //   foreignKey:'gradeId1',
      //   as: 'grades',
      //   onDelete: 'cascade',
      //   onUpdate: 'cascade'
      // })
      // Student.hasMany(models.Course,{
      //   foreignKey:'courseId2',
      //   as: 'course_list',
      //   onDelete: 'cascade',
      //   onUpdate: 'cascade'
      // })
      // Student.belongsToMany(models.Grade,{
      //   foreignKey:'gradeId',
      //   as: 'grades',
      //   through: models.CourseList,
      //   onDelete: 'cascade',
      //   onUpdate: 'cascade'
      // })
    }
  }
  Student.init({
    name: DataTypes.STRING,
    email: DataTypes.STRING,
  }, 
  {
    sequelize,
    modelName: 'Student',
    tableName: 'students'
  });
  return Student;
};