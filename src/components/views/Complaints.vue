<template>
    <div>
      <h1>Complaints</h1>
      <form @submit.prevent="submitComplaint">
        <textarea v-model="complaint" placeholder="Your complaint" required></textarea>
        <button type="submit">Submit</button>
      </form>
      <div v-for="(c, index) in complaints" :key="index">
        <p>{{ c }}</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        complaint: '',
      };
    },
    props: ['complaints'],
    methods: {
      submitComplaint() {
        this.$emit('add-complaint', this.complaint);
        this.complaint = '';
      },
    },
  };
  </script>
  