<template>
    <nav class="fixed w-full flex justify-around items-center bg-slate-500 h-[63px]">
        <router-link to="/" name="HomePage" class="border-b-2 border-green-400 hover:text-green-400 pr-2 pl-2 text-white">Home</router-link>
        <router-link to="/courses" name="CoursePage" class="border-b-2 border-green-400 hover:text-green-400 pr-2 pl-2 text-white">Courses</router-link>
        <router-link to="/students" name="StudentPage" class="border-b-2 border-green-400 hover:text-green-400 pr-2 pl-2 text-white">Students</router-link>
    </nav>
    </template>
    
    
    <script>
        export default { 
            name: 'NavBar',
        }
    </script>
    
    
    <style>

    </style>