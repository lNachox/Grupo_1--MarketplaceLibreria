<template>
  <div class="product-list">
    <ProductItem
      v-for="product in products"
      :key="product.id"
      :id="product.id"
      :name="product.name"
      :price="product.price"
      :image="product.image"
      :description="product.description"
      :supplier="product.supplier"
      :label1="product.label1"
      :label2="product.label2"
      @remove="removeProduct"
    />
  </div>
</template>

<script>
import ProductItem from '@/components/ProductItem.vue';
import productData from '@/data/products.json';

export default {
  name: 'ProductList',
  components: {
    ProductItem
  },
  data() {
    return {
      products: productData
    };
  },
  methods: {
    removeProduct(id) {
      this.products = this.products.filter(product => product.id !== id);
    }
  }
};
</script>

<style scoped>
.product-list {
  max-width: 1200px;
  margin: 0 auto;
  padding-top: 1.5rem;
}
</style>
