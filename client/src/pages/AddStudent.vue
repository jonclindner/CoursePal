<template>
    <div>
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
        const response = await fetch("/api/addStudent", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(this.student),
        });
        if (response.ok) {
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
    
<!--   
    
    <script>
        export default { 
            name: 'AddStudent',
        }
    </script>
     -->
    
    <style>
    
    </style>