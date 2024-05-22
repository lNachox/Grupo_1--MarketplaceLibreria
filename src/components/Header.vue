<template>
  <header class="header">
    <div class="header-content">

      <button class="menu-button" @click="handleClick('menu')">☰</button>


      <router-link :to="{ name: 'ProductList', params: { id: id } }">
        <button class="logo-button" @click="handleClick('home')">
          <img src="./assets/img/logo.png" alt="Logo" class="logo" />
        </button>
      </router-link>

      <div class="search-bar">
        <input type="text" placeholder="Buscar Productos" v-model="searchQuery" />
        <button @click="search">Buscar</button>
      </div>
      <router-link :to="{ name: 'UserList', params: { id: id } }">
        <button class="profile-button" @click="handleClick('profile')"> 
        <img src="./assets/img/user-icon.png" alt="profile" /></button>
      </router-link>

      <router-link :to="cartLink"><button class="cart-button">
        <img src="./assets/img/cart-icon.png" alt="cart" />
      </button></router-link>

    </div>
    <div class="sidebar" :class="{ open: isSidebarOpen }">
      <router-link :to="userProfileLink"><div>Perfil</div></router-link>
      <router-link :to="complaintsLink"><div>Quejas</div></router-link>
      <div>Estados de pedido</div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {
      searchQuery: '',
      isSidebarOpen: false,
      userId: null
    }
  },
  computed: {
    userProfileLink() {
      return this.userId ? `/user/${this.userId}` : '/userAuth';
    },
    complaintsLink(){
      return this.userId ? `/complaints` : '/userAuth';
    },
    cartLink(){
      return this.userId ? `/cart` : '/userAuth';
    }
  },
  created() {
    try {
      const user = JSON.parse(sessionStorage.getItem('user'));
      if (user && user.id) {
        this.userId = user.id;
      } else {
        this.userId = null;
      }
    } catch (error) {
      this.userId = null;
    }
  },
  methods: {
    search() {
      console.log('Buscando:', this.searchQuery);
    },
    handleClick(destination) {
      console.log('Navegar a:', destination);
      if (destination === 'menu') {
        if (sessionStorage.getItem('user')) {
          this.isSidebarOpen = !this.isSidebarOpen;
        } else {
          this.$router.push('/userAuth');
        }
      }
    }
  }
}
</script>

<style scoped>
.header {
  width: 100%;
  background-color: #d7bc72;
  padding: 0.5rem 0;
  text-align: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 5000;
}

.header-content {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1rem;
}
.sidebar {
  position: fixed;
  left: 0;
  top: 0;
  width: 250px;
  height: 100%;
  background: #333;
  color: white;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
  transform: translateX(-100%);
  transition: transform 0.3s ease;
  z-index: 6000; /* Ensure the sidebar is above the header */
}
.sidebar.open {
  transform: translateX(0);
}
.sidebar div {
  padding: 10px;
  border-bottom: 1px solid white;
  cursor: pointer;
}
.menu-button {
  background: none;
  border: none;
  cursor: pointer;
  font-size: 1.5rem;
  z-index: 7000; /* Ensure the menu button is above the sidebar */
  position: relative;
}
.cart-button,
.profile-button,
.logo-button {
  background: none;
  border: none;
  cursor: pointer;
  font-size: 1.5rem;
}

.menu-button {
  margin-right: auto; 
}
.cart-button {
  height: 40px;
}

.cart-button img{
  height: 40px;
}
.logo-button {
  margin-left: auto; 
  margin-right: auto; 
}

.logo {
  height: 60px;
}

.search-bar {
  flex: 1;
  display: flex;
  justify-content: center;
  margin: 0 1rem;
}

.search-bar input {
  padding: 0.75rem;
  font-size: 1rem;
  border: 1px solid #ddd;
  border-radius: 4px 0 0 4px;
  width: 100%;
}

.search-bar button {
  padding: 0.25rem 1rem;
  font-size: 1rem;
  border: none;
  background-color: #4CAF50;
  color: white;
  border-radius: 0 4px 4px 0;
  cursor: pointer;
}

.search-bar button:hover {
  background-color: #45a049;
}

.profile-button {
  margin-left: auto;
  height: 50px;
}

.profile-button img {
  height: 40px;
}
</style>
