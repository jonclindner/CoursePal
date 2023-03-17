'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class CourseList extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  CourseList.init({
    studentId: {
      type: DataTypes.INTEGER, 
      onDelete: 'CASCADE',
        references: {
          model: 'students',
          key: 'id'
        }
    },
    courseId: {
      type: DataTypes.INTEGER,
      onDelete: 'CASCADE',
        references: {
          model: 'courses',
          key: 'id'
        }
    }
  }, {
    sequelize,
    modelName: 'Course_List',
    tableName: 'course_lists'
  });
  return CourseList;
};