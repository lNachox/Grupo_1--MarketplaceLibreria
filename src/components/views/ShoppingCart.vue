<template>
  <div class="shopping-cart">
    <h1>Carrito de Compras</h1>
    <div v-for="product in cart" :key="product.id" class="cart-item">
      <h2>{{ product.name }}</h2>
      <img :src="product.image" alt="Product Image" />
      <p>{{ product.description }}</p>
      <p>Precio: {{ product.price }}</p>
      <button @click="removeFromCart(product.id)">Eliminar del Carrito</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ShoppingCart',
  props: {
    cart: Array
  },
  methods: {
    removeFromCart(productId) {
      this.$emit('remove-from-cart', productId);
    }
  }
};
</script>

<style scoped>
.shopping-cart {
  padding: 2rem;
}

.cart-item {
  border: 1px solid #ddd;
  padding: 1rem;
  margin-bottom: 1rem;
  background-color: #f9f9f9;
  border-radius: 5px;
}

.cart-item img {
  max-width: 100%;
  height: auto;
}

button {
  background-color: red;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  cursor: pointer;
  border-radius: 5px;
}

button:hover {
  background-color: darkred;
}
</style>