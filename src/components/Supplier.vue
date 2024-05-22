<template>
    <div class="supplier">
        <img :src="image" alt="supplier-image" class="supplier-image" />
        <div class="supplier-details">
            <h2>{{ name }}</h2>
            <p class="email">{{ email }}</p>
            <p class="description">{{ description }}</p>
            <router-link :to="{ name: 'SupplierDetail', params: { id: id } }">
                <button class="detail-button">Ver Perfil</button>
            </router-link>
        </div>
        <button class="remove-button" @click="removeSupplier">X</button>
    </div>
</template>

<script>
export default {
    name: 'Supplier',
    props: {
        id: {
            type: Number,
            required: true
        },
        name: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        },
        image: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        password: {
            type: password,
            required: true
        },
        URL: {
            type: String,
            required: true
        }
    },
    methods: {
        removeSupplier() {
            this.$emit('remove', this.id);
        }
    }
};
</script>

<style scoped>
.supplier {
    display: flex;
    align-items: center;
    border: 1px solid #ccc;
    margin-bottom: 10px;
    background-color: #f5e2b7;
    padding: 10px;
    border-radius: 10px;
    margin-bottom: 1rem;
    overflow: hidden;
}

.supplier-image {
    min-width: 215px; max-width: 215px;
    min-height: 150px; min-height: 150px;
    object-fit: cover;
    margin-right: 10px;
    border-radius: 1px;
}

.supplier-details {
    flex-grow: 1;
  display: flex;
  flex-direction: column;
}

.supplier-details h2 {
    margin: 0.5;
  font-size: 1.2rem;
  background-color: #8b5e34;
  color: white;
  padding: 6px;
  border-radius: 5px;
}

.email {
    font-size: 1.1rem;
  font-weight: bold;
  color: #000000;
  background-color: #d0a671;
  padding: 5px;
  border-radius: 5px;
  align-self: flex-start;
}

.description {
    margin: 5px 0;
  background-color: #8b5e34;
  color: white;
  padding: 5px;
  border-radius: 5px;
}

.detail-button {
    background-color: #4CAF50;
    color: white;
  border: none;
  padding: 5px;
  cursor: pointer;
  border-radius: 5px;
  width: 10%;
}

.detail-button:hover {
    background-color: #45a049;
}

.remove-button {
    background-color: red;
  color: white;
  border: none;
  cursor: pointer;
  border-radius: 50%;
  min-width: 40px;
  min-height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
}

.remove-button:hover {
    background-color: darkred;
}

</style>