import { createWebHistory, createRouter } from 'vue-router'

import HomePage from '../src/pages/HomePage.vue'
import StudentPage from './pages/StudentPage.vue'
import CoursePage from './pages/CoursePage.vue'
import AddStudent from './pages/AddStudent.vue'
import AddCourse from './pages/AddCourse.vue'
import DetailedStudentPage from './pages/DetailedStudentPage.vue'
import DetailedCoursePage from './pages/DetailedCoursePage.vue'

const routes = [
  { path: '/', component: HomePage, name: 'HomePage' },
  { path: '/students', component: StudentPage, name: 'StudentPage' },
  { path: '/courses', component: CoursePage, name: 'CoursePage' },
  { path: '/courses/add', component: AddCourse, name: 'AddCourse' },
  { path: '/students/add', component: AddStudent, name: 'AddStudent' },
  {path: '/students/:id', component: DetailedStudentPage, name: 'DetailedStudentPage'},
  {path: '/courses/:id', component: DetailedCoursePage, name: 'DetailedCoursePage'}
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
