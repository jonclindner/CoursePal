<template>
    <div class=" w-full h-screen flex justify-center items-center">
        <div class=" bg-white w-11/12 h-3/4 ">
            <h2 class=" w-full text-4xl mb-8">Courses</h2>
            <div>
                <div class="w-full h-full flex flex-wrap justify-evenly">
                    <!-- Map goes here -->
                    <div v-for="course in courses" :key="course.id" @click="navigateCourse(course.id)" class=" bg-slate-300 flex m-2 flex-wrap flex-row w-[275px] h-[250px] shadow-2xl hover:scale-110 hover:cursor-pointer transition-transform justify-evenly items-center">
                        <ViewCourses :course="course"/>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
    
    
<script>
import ViewCourses from '../components/ViewCourses.vue'
export default {
    name: 'CoursePage',
    components: {
        ViewCourses
    },
    data: () => ({
        courses: [{
            id: 101,
            name: 'BIO',
        }, {
            id: 220,
            name: 'LIT',
        }, {
            id: 309,
            name: 'MATH',
        },{
            id: 619,
            name: 'SCI',
        }
        ]
    }),
    methods: {
        navigateCourse(id) {
            this.$router.push(`/courses/${id}`)
        }
    }
}
</script>
    
    
<style></style>