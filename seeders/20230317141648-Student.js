'use strict'
const falso = require('@ngneat/falso')
const students = [...Array(50)].map(() => ({
  email: falso.randEmail(),
  name: falso.randFullName(),
  createdAt: new Date(),
  updatedAt: new Date()
}))

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('students', students)
  },
  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('students')
  }
};
