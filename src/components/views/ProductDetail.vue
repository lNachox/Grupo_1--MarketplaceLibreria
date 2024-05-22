
<template>
  <div class="product-detail">
    <div class="sidebar">
      <div class="sidebar-item">Útiles escolares</div>
      <div class="sidebar-item">Escritura y corrección</div>
    </div>
    <div class="product-info">
      <h2>{{ product.name }}</h2>
      <img :src="product.image" alt="Product Image" />
      <div class="product-meta">
        <div class="product-meta-item">{{ product.description }}</div>
        <div class="product-meta-item">Vendedor: {{ product.supplier }}</div>
        <div class="product-meta-item">Precio: {{ product.price }}</div>
      </div>
      <p>Etiquetas: {{ product.label1 }}, {{ product.label2 }}</p>
      <button @click="addToCart">Añadir al Carrito</button>
      <button @click="removeProduct">Eliminar Producto</button>
    </div>
  </div>
</template>

<script>
import productData from '@/data/products.json';

export default {
  name: 'ProductDetail',
  data() {
    return {
      product: null
    };
  },
  created() {
    const productId = parseInt(this.$route.params.id);
    this.product = productData.find(product => product.id === productId);
  },
  methods: {
    addToCart() {
      this.$emit('add-to-cart', this.product);
    },
    removeProduct() {
      console.log(`Producto con ID ${this.product.id} eliminado.`);
    }
  }
};
</script>

<style scoped>
.product-detail {
  display: flex;
  background-color: #f5e2b7;
  padding: 2rem;
}

.sidebar {
  display: flex;
  flex-direction: column;
  margin-right: 1rem;
  width: 200px;
}

.sidebar-item {
  background-color: #8b5e34;
  color: white;
  padding: 1rem;
  margin-bottom: 1rem;
  text-align: center;
}

.product-info {
  background-color: #d0a671;
  padding: 1.5rem;
  flex-grow: 1;
}

.product-info h2 {
  margin: 0 0 1rem 0;
}

.product-meta {
  margin-bottom: 1rem;
}

.product-meta-item {
  background-color: #8b5e34;
  color: white;
  padding: 0.5rem;
  margin-bottom: 0.5rem;
  text-align: center;
}

.product-info img {
  max-width: 100%;
  height: auto;
  margin-bottom: 1rem;
}

.product-info p {
  background-color: #8b5e34;
  color: white;
  padding: 1rem;
  margin-bottom: 1rem;
}

button {
  background-color: #4CAF50;
  color: white;
  border: none;
  padding: 1rem;
  cursor: pointer;
  width: 100%;
  margin-bottom: 0.5rem;
}

button:hover {
  background-color: #45a049;
}

button:last-child {
  background-color: red;
}

button:last-child:hover {
  background-color: darkred;
}
</style>
