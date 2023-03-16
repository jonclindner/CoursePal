<template>

    <div class="homePageFeature">

        Home Page Feature Section
    </div>
    <div>
        <button @click="$router.push('/courses')">View Courses</button>
        <button @click="$router.push('/students')">View Students</button>
        <button >Add Courses</button>
        <button>Add Students</button>
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
    .homePageCtn {
        width: 100%;
        height: 64px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 2.5rem;
    }

    .homePageFeature {
        width: 100%;
        height: 80vh;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 2.5rem;
        background-color: beige;
    }
</style>