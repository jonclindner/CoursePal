<template>
    <div class=" flex justify-center items-center h-screen w-full">
        <div class="w-10/12 h-4/6">
            <h2 class="w-full text-4xl">Student's Name Courses</h2>
            <div class="flex flex-wrap justify-around">
                <div class="flex flex-wrap" v-for="course in courses" :key="course.id" @click="navigateCourse(course.id)">
                    <!-- Map goes here -->
                    <div class=" w-[275px] h-[250px] bg-slate-200 m-2 flex flex-wrap items-center hover:scale-110 hover:cursor-pointer transition-transform shadow-2xl">
                    <ViewCourses :course="course"/>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
    
    
<script>
import ViewCourses from '../components/ViewCourses.vue';
import axios from 'axios';
export default {
    name: 'DetailedStudentPage',
    components: {
        ViewCourses
    },
    data: () => ({
        courses: [
        ]
    }),
    methods: {
        navigateCourse(id) {
            this.$router.push(`/courses/${id}`)
        },
        async getCoursesByStudentId(id) {
            const response = await axios.get(`http://localhost:3001/api/course/${id}`)
            console.log(response);
    }
}
}
</script>
    
    
<style></style>