<template>
    <div class="card">
        <img :src="supplier.image" alt="Supplier Image" class="profile-pic" />
        <div class="info">
            <h2>{{ user.name }}</h2>
            <p class="email">{{ supplier.email }}</p>
            <div class="description">
                <p>{{ supplier.description }}</p>
            </div>
        </div>
        <div class="profile-actions">
      <button @click="editProfile">Editar Perfil</button>
        </div>
    </div>
</template>

<script>
import supplierData from '@/data/suppliers.json';

export default {
    name: 'SupplierDetail',
    data() {
        return {
            user: null
        };
    },
    created() {
        this.$route.params.id
        const supplierId = parseInt(this.$route.params.id);
        this.supplier = supplierData.find(supplier => supplier.id === supplierId);
    },
    methods: {
    editProfile() {
      this.$router.push({ name: 'editprofile' });
    },
  }
};
</script>

<style scoped>
.card {
    margin: auto;
    background-color: #f5e2b7;
    border: 2px solid #ccc;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    width: 50%;
    text-align: center;
    padding: 5rem;
    
}

.profile-pic {
    border-radius: 50%;
    width: 200px;
    height: 200px;
    object-fit: cover;
}

.info {
    margin-top: 20px;
}

.info h2 {
    font-size: 24px;
    color: #5b3920;
    margin: 0;
}

.email {
    color: #6c4c3a;
    margin: 10px 0;
}

.description {
    background-color: #6c4c3a;
    color: white;
    padding: 10px;
    border-radius: 5px;
    margin: 20px 0;
}

.delete-button {
    background-color: #e74c3c;
    color: white;
    border: none;
    border-radius: 5px;
    padding: 10px 20px;
    font-size: 16px;
    cursor: pointer;
    transition: background-color 0.3s;
}

.delete-button:hover {
    background-color: #c0392b;
}

</style>
