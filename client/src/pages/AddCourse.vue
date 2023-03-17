<template>
    <div class="formWrapper">
      <h1>Add a Course</h1>
      <form @submit.prevent="handleSubmit" class="flex flex-wrap flex-col justify-evenly">
        <label>
          Name:
          <input type="text" :value="course.courseName" @input="course.courseName = $event.target.value" required class=" border-green-400 border-2 mb-2"/>
        </label>
        <label>
          Number:
          <input type="text" :value="course.courseNumber" @input="course.courseNumber = $event.target.value" required class=" border-green-400 border-2"/>
        </label>
        <button type="submit" class=" border-2 w-40 self-center mt-2">Submit</button>
      </form>
      <div v-if="message">
        {{ message }}
      </div>
    </div>
  </template>
  
  <script>
  import axios from "axios";
  
  export default {
    data() {
      return {
        course: {
          courseName: "",
          courseNumber: "",
        },
        message: "",
      };
    },
    methods: {
      async handleSubmit() {
        try {
          const response = await axios.post('http://localhost:3001/api/course/createcourse', this.course);
          if (response.status === 200) {
            this.message = "Course has been added to the catalog!";
            this.course = {
              courseName: "",
              courseNumber: "",
            };
          } else {
            throw new Error("Error: Course was not added to catalog");
          }
        } catch (error) {
          console.error(error);
          this.message = "An error occurred while adding the course.";
        }
      },
    },
  };
  </script>
    
    <style>
    
    </style>