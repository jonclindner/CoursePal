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
      Course.hasMany(models.Student, {
        foreignKey: 'studentId',
        as: 'students',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      })
      Course.hasMany(models.Grade, {
        foreignKey: 'gradeId',
        as: 'grades',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      })
    }
  }
  Course.init({
    courseName: DataTypes.STRING,
    courseNumber: DataTypes.STRING,
    studentId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'studentId',
      onDelete: 'CASCADE',
      references: {
        model: 'students',
        key: 'id'
      }
    },
    gradeId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'gradeId',
      onDelete: 'CASCADE',
      references: {
        model: 'grades',
        key: 'id'
      }
    },
  }, {
    sequelize,
    modelName: 'Course',
    tableName: 'courses'
  });
  return Course;
};