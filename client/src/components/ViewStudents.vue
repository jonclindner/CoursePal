<template>
    <div class=" bg-slate-500 m-2 w-full h-1/3 flex flex-wrap flex-row justify-center content-center text-white">
        <h1 class=" w-full">{{ student.name }}</h1>
        <h2></h2>
    </div>
    <div class="flex justify-center items-center">
        <h3>View Student's Courses →</h3>
    </div>
</template>


<script>
export default {
    name: 'ViewStudents',
    props: ['student'],
}
</script>


<style></style>