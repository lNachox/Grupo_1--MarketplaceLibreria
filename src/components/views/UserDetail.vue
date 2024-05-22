<template>
    <div class="user-detail">
        <div class="product-info">
            <h2>{{ user.name }}</h2>
            <img :src="user.image" alt="User Image" />
            <div class="user-meta">
                <div class="user-meta-item">{{ user.email }}</div>
                <div class="user-meta-item">{{ user.description }}</div>
        </div>
    </div>
</div>
</template>

<script>
import userData from '@/data/users.json';

export default {
    name: 'UserDetail',
    data() {
        return {
            user: null
        };
    },
    created() {
        const userId = parseInt(this.$route.params.id);
        this.user = userData.find(user => user.id === userId);
    }
};
</script>

<style scoped>
.user-detail {
    display: flex;
    background-color: #f5e2b7;
    padding: 2rem;
}

.product-info {
    display: flex;
    flex-direction: column;
    margin-right: 1rem;
    width: 200px;
}

.user-meta-item {
    background-color: #8b5e34;
    color: white;
    padding: 1rem;
    margin-bottom: 1rem;
    text-align: center;
}

.user-meta-item {
    background-color: #8b5e34;
    color: white;
    padding: 1rem;
    margin-bottom: 1rem;
    text-align: center;
}
</style>