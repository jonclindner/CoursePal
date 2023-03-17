'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface) {
		let courses = [
			{ courseName: 'Intro to Computer Science', courseNumber: 'CS 101' },
			{ courseName: 'English Composition', courseNumber: 'ENG 101' },
			{ courseName: 'Principles of Economics', courseNumber: 'ECON 101' },
			{ courseName: 'Introduction to Psychology', courseNumber: 'PSYCH 101' },
			{ courseName: 'College Algebra', courseNumber: 'MATH 101' },
			{ courseName: 'Introduction to Sociology', courseNumber: 'SOC 101' },
			{ courseName: 'General Biology', courseNumber: 'BIO 101' },
			{ courseName: 'World History', courseNumber: 'HIST 101' },
			{ courseName: 'Introduction to Philosophy', courseNumber: 'PHIL 101' },
			{ courseName: 'Chemistry for Engineers', courseNumber: 'CHEM 101' },
			{ courseName: 'Fundamentals of Accounting', courseNumber: 'ACCTG 101' },
			{ courseName: 'Marketing Principles', courseNumber: 'MKTG 101' },
			{
				courseName: 'Introduction to Anthropology',
				courseNumber: 'ANTHRO 101',
			},
			{
				courseName: 'Art History: Ancient to Medieval',
				courseNumber: 'ART 101',
			},
			{ courseName: 'Fundamentals of Music Theory', courseNumber: 'MUS 101' },
			{ courseName: 'Public Speaking', courseNumber: 'COMM 101' },
			{
				courseName: 'Introduction to Political Science',
				courseNumber: 'POL SCI 101',
			},
			{ courseName: 'Introduction to Theatre', courseNumber: 'THEATR 101' },
			{ courseName: 'Spanish I', courseNumber: 'SPANISH 101' },
			{ courseName: 'French I', courseNumber: 'FRENCH 101' },
			{ courseName: 'German I', courseNumber: 'GERMAN 101' },
			{ courseName: 'Chinese I', courseNumber: 'CHINESE 101' },
			{ courseName: 'Japanese I', courseNumber: 'JAPAN 101' },
			{ courseName: 'Environmental Science', courseNumber: 'ENV SCI 101' },
			{ courseName: 'Introduction to Astronomy', courseNumber: 'ASTRON 101' },
			{
				courseName: 'Introduction to African American Studies',
				courseNumber: 'AFAM 101',
			},
		]
		await queryInterface.bulkInsert('courses', courses)
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.bulkDelete('courses')
	},
}
