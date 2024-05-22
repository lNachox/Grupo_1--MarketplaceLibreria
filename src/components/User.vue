<template>
    <div class="user">
        <img :src="image" alt="user-image" class="user-image" />
        <div class="user-details">
            <h2>{{ name }}</h2>
            <p class="email">{{ email }}</p>
            <p class="description">{{ description }}</p>
            <router-link :to="{ name: 'UserDetail', params: { id: id } }">
                <button class="detail-button">Ver Perfil</button>
            </router-link>
        </div>
        <button class="remove-button" @click="removeUser">X</button>
    </div>
</template>

<script>
export default {
    name: 'User',
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
        }
    },
    methods: {
        removeUser() {
            this.$emit('remove', this.id);
        }
    }
};
</script>

<style scoped>
.user {
    display: flex;
    align-items: center;
    border: 
    background-color: #f5e2b7;
    padding: 10px;
    margin-bottom: 1rem;
}

.user-image {
    width: 200px;
    height: 200px;
    object-fit: cover;
    margin-right: 1rem;
}

.user-details {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.user-details h2 {
    margin: 0 0 1rem 0;
}

.email {
    color: #8b5e34;
    font-weight: bold;
    margin-bottom: 1rem;
}

.description {
    margin-bottom: 1rem;
}

.detail-button {
    background-color: #8b5e34;
    color: white;
    padding: 0.5rem 1rem;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    margin-bottom: 1rem;
}

.detail-button:hover {
    background-color: #6e492b;
}

.remove-button {
    background-color: red;
    color: white;
    border: none;
    cursor: pointer;
    font-size: 1.5rem;
    padding: 0.5rem;
    border-radius: 5px;
}

.remove-button:hover {
    background-color: darkred;
}

</style>