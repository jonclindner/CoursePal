<template>
    <div class=" w-full h-screen flex justify-center items-center">
        <div class=" bg-white w-11/12 h-3/4 ">
            <h2 class=" w-full text-4xl mb-8">Student List</h2>
            <div>
                <div class="w-full h-full flex flex-wrap justify-evenly">
                    <!-- Map goes here -->
                    <div v-for="student in students" :key="student.id" @click="navigateStudent(student.id)" class=" bg-slate-300 flex m-2 flex-wrap flex-row w-[275px] h-[250px] shadow-2xl hover:scale-110 hover:cursor-pointer transition-transform justify-evenly items-start">
                        <ViewStudents :student="student" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
    
    
<script>
import ViewStudents from '../components/ViewStudents.vue'
import axios from 'axios';
export default {
    name: 'DetailedCoursePage',
    components: {
        ViewStudents
    },
    data: () => ({
        students: []
    }),
    methods: {
        navigateStudent(id) {
            this.$router.push(`/students/${id}`)
        },
        async getCourseById(id) {
            const response = await axios.get(`http://localhost:3001/api/course/${id}`)
            console.log(response);
        }
    }
}
</script>
    
    
<style></style>