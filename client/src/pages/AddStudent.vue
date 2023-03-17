<template>
    <div class="formWrapper">
      <h1>Add a Student</h1>
      <form @submit.prevent="handleSubmit">
        <label>
          Name:
          <input type="text" :value="student.name" @input="student.name = $event.target.value" required />
        </label>
        <label>
          Email:
          <input type="email" :value="student.email" @input="student.email = $event.target.value" required />
        </label>
        <button type="submit">Submit</button>
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
        try {
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
        } catch (error) {
          console.error(error);
          this.message = "An error occurred while adding the student.";
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