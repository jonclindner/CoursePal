<template>
    <div class=" flex justify-center items-center h-screen w-full">
        <div class="w-10/12 h-4/6">
            <h2 class="w-full text-4xl">Student's Name Courses</h2>
            <div class="flex flex-wrap">
                <div class=" flex flex-wrap" v-for="course in courses" :key="course.id">
                    <!-- Map goes here -->
                    <div class=" w-[275px] h-[250px] bg-slate-200 m-2 flex items-center hover:scale-110 hover:cursor-pointer transition-transform">
                    <ViewCourses :course="course"/>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
    
    
<script>
import ViewCourses from '../components/ViewCourses.vue';
export default {
    name: 'DetailedStudentPage',
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
        }, {
            id: 619,
            name: 'SCI',
        }
        ]
    })
}
</script>
    
    
<style></style>