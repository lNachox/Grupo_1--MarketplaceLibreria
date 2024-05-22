<template>
    <div>
      <h1>Cart</h1>
      <div v-for="(item, index) in cart" :key="index">
        <p>{{ item.title }}</p>
        <button @click="removeFromCart(index)">Remove</button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: ['cart'],
    methods: {
      removeFromCart(index) {
        this.$emit('remove-from-cart', index);
      },
    },
  };
  </script>
  