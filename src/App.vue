<template>
  <div id="app">
    <Header />
    <router-view 
      :cart="cart" 
      @add-to-cart="addToCart" 
      @remove-from-cart="removeFromCart" 
    />
  </div>
</template>

<script>
import Header from './components/Header.vue';
import productData from '@/data/products.json';

export default {
  name: 'App',
  components: {
    Header
  },
  data() {
    return {
      cart: []
    };
  },
  methods: {
    addToCart(product) {
      this.cart.push(product);
    },
    removeFromCart(productId) {
      this.cart = this.cart.filter(product => product.id !== productId);
    }
  }
};
</script>

<style>
#app {
  padding-top: 40px;
}
</style>
