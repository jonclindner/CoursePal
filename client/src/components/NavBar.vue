<template>
    <nav class="nav">
        <router-link to="/" name="HomePage">Home</router-link>
        <router-link to="/courses" name="CoursePage">Courses</router-link>
        <router-link to="/students" name="StudentPage">Students</router-link>
    </nav>
    </template>
    
    
    <script>
        export default { 
            name: 'NavBar',
        }
    </script>
    
    
    <style>
        .nav {
            display: flex;
            justify-content: space-around;
        }

    </style>