<template>
    <div class="h-screen min-w-full flex flex-wrap justify-center content-center">
        <div class="homePageFeature min-w-full h-4/5 flex flex-wrap justify-center items-start content-start">
            <h1 class=" text-7xl w-full mb-8">Welcome to CoursePal</h1>
            <img src="../assets/homeBg.png" alt="" class=" h-[450px] w-[550px] mb-4">
            <h3 class=" text-3xl text-gray-500 w-full">Your one stop shop for course resources</h3>
        </div>
        <div class="flex justify-around h-10 w-3/4">
            <button @click="$router.push('/courses')" class=" mx-1 h-20 border-2 border-green-400 p-1.5 hover:bg-green-100 sm:h-16">View Courses</button>
            <button @click="$router.push('/students')" class=" mx-1 h-20 border-2 border-green-400 p-1.5 hover:bg-green-100 sm:h-16">View Students</button>
            <button @click="$router.push('/courses/add')" class=" mx-1 h-20 border-2 border-green-400 p-1.5 hover:bg-green-100 sm:h-16">Add Courses</button>
            <button @click="$router.push('/students/add')" class=" mx-1 h-20 border-2 border-green-400 p-1.5 hover:bg-green-100 sm:h-16">Add Students</button>
        </div>
    </div>
</template>
    
    
<script>
export default {
    name: 'HomePage',
    components: {
    }
}
</script>
    
    
<style>
/* .homePageCtn {
        width: 100%;
        height: 64px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 2.5rem;
    } */

/* .homePageFeature {
        width: 100%;
        height: 80vh;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 2.5rem;
        background-color: beige;
    }  */
</style>