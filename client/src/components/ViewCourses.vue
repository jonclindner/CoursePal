<template>
    <div class=" bg-slate-500 m-2 w-1/3 h-5/6 flex flex-wrap flex-row justify-center content-center text-white">
        <h1 class=" w-full">{{course.name}}</h1>
        <h2>{{ course.id }}</h2>
    </div>
    <div class="w-7/12 h-5/6 flex justify-center items-center">
        <h3>View Enrolled Students →</h3>
    </div>
</template>
    
    
<script>
export default {
    name: 'ViewCourses',
    props: ['course'],
    
}
</script>
    
    
<style></style>