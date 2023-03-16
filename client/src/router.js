import { createWebHistory, createRouter } from 'vue-router'

import HomePage from '../src/pages/HomePage.vue'
import StudentPage from './pages/StudentPage.vue'
import CoursePage from './pages/CoursePage.vue'
import AddStudent from './pages/AddStudent.vue'
import AddCourse from './pages/AddCourse.vue'

const routes = [
  { path: '/', component: HomePage, name: 'HomePage' },
  { path: '/students', component: StudentPage, name: 'StudentPage' },
  { path: '/courses', component: CoursePage, name: 'CoursePage' },
  { path: '/courses/add', component: AddCourse, name: 'AddCourse' },
  { path: '/students/add', component: AddStudent, name: 'AddStudent' }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
