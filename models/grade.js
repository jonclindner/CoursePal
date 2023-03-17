'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Grade extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Grade.belongsTo(models.Student, {
        foreignKey: 'studentId',
        as: 'student',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'

      })
      Grade.belongsTo(models.Course, {
        foreignKey: 'courseId',
        as: 'course',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'

      })
      
    }
  }
  Grade.init({
    studentId: {
      type:DataTypes.INTEGER,
      field: 'studentId',
      onDelete: 'CASCADE',
      references:{
        model: 'students',
        key:'id'
      }
    },
    courseId: {
      type:DataTypes.INTEGER,
      field: 'courseId',
      onDelete: 'CASCADE',
      references:{
        model: 'courses',
        key:'id'
      }
    },
    score: DataTypes.INTEGER,
    letterGrade: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Grade',
    tableName: 'grades'
  });
  return Grade;
};