import { createWebHistory, createRouter } from "vue-router";

import HomePage from '../src/pages/HomePage.vue';
import StudentPage from './pages/StudentPage.vue';

const routes = [
    {path: '/', component: HomePage, name: 'HomePage'},
    {path: '/students', component: StudentPage, name: 'StudentPage'}
]


const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router