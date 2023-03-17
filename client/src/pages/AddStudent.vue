<template>
    <div class="formWrapper">
      <h1>Add a Student</h1>
      <form @submit.prevent="handleSubmit" class="flex flex-wrap flex-col justify-evenly">
        <label>
          Name:
          <input type="text" :value="student.name" @input="student.name = $event.target.value" required class="border-green-400 border-2 mb-2"/>
        </label>
        <label>
          Email:
          <input type="email" :value="student.email" @input="student.email = $event.target.value" required class="border-green-400 border-2"/>
        </label>
        <button type="submit" class=" border-2 w-40 self-center mt-2">Submit</button>
      </form>
      <div v-if="message">
        {{ message }}
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios'
  
  export default {
    data() {
      return {
        student: {
          name: "",
          email: "",
        },
        message: "",
      };
    },
    methods: {
      async handleSubmit() {
       
          const response = await axios.post('http://localhost:3001/api/student/createstudent', this.student);
          if (response.status === 200) {
            this.message = "Student added successfully!";
            this.student = {
              name: "",
              email: "",
            };
          } else {
            throw new Error("Failed to add student");
          }
        
      },
    },
  };
  </script>
  
    

    <style>
    .formWrapper {
        margin-top: 150px;
  }
    </style>