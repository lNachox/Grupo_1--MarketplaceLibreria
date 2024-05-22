<template>
  <div class="auth-container">
    <div class="auth-tabs">
      <div class="auth-tab" :class="{active: activeTab === 'login'}" @click="activeTab = 'login'">Inicio de cuenta</div>
      <div class="auth-tab" :class="{active: activeTab === 'register'}" @click="activeTab = 'register'">Registrar cuenta</div>
    </div>
    <div v-if="activeTab === 'login'" class="login-form">
      <form @submit.prevent="login">
        <input type="email" placeholder="Correo" v-model="loginEmail">
        <input type="password" placeholder="Contraseña" v-model="loginPassword">
        <button type="submit">Continuar</button>
      </form>
    </div>
    <div v-if="activeTab === 'register'" class="register-form">
      <div class="roles-tabs">
        <div class="role-tab" :class="{active: selectedRole === 'buyer'}" @click="selectedRole = 'buyer'">Usuario Comprador</div>
        <div class="role-tab" :class="{active: selectedRole === 'library'}" @click="selectedRole = 'library'">Usuario Libreria</div>
      </div>
      <form @submit.prevent="register">
      <div v-if="selectedRole === 'library'">
        <!-- Library User Registration Fields -->
        <input type="text" placeholder="Nombre empresa" v-model="registerCompanyName">
        <input type="email" placeholder="Correo" v-model="registerEmail">
        <input type="password" placeholder="Contraseña" v-model="registerPassword">
        <input type="password" placeholder="Repetir Contraseña" v-model="registerConfirmPassword">
        <input type="text" placeholder="URL" v-model="registerURL">
      </div>
      <div v-else>
        <!-- Buyer Registration Fields -->
        <input type="text" placeholder="Nombre" v-model="registerName">
        <input type="email" placeholder="Correo" v-model="registerEmail">
        <input type="password" placeholder="Contraseña" v-model="registerPassword">
        <input type="password" placeholder="Repetir Contraseña" v-model="registerConfirmPassword">
      </div>
      <button type="submit">Registrarse</button>
      </form>
    </div>
    <div v-if="showPopup" class="popup show">{{ popupMessage }}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeTab: 'login',
      selectedRole: 'buyer',
      loginEmail: '',
      loginPassword: '',
      registerName: '',
      registerEmail: '',
      registerPassword: '',
      registerConfirmPassword: '',
      registerCompanyName: '',
      registerURL: '',
      showPopup: false,
      popupMessage: '',
    };
  },
  methods: {
    async fetchUsers() {
      const response = await import('@/data/users.json');
      return response.default;
    },
    togglePopup() {
      this.showPopup = true;
      setTimeout(() => {
        this.showPopup = false;
      }, 2500);
    },
    async login() {
      const users = await this.fetchUsers();
      const matchingUser = users.find((userItem) => userItem.email === this.loginEmail);
      if (matchingUser) {
        sessionStorage.setItem('user', JSON.stringify(matchingUser));
        this.popupMessage = 'Bienvenido ' + matchingUser.name + '.';
        this.togglePopup();
      } else {
        this.popupMessage = 'No se encontró usuario con ese correo.';
        this.togglePopup();
      }
    },
    async register() {
      const users = await this.fetchUsers();
      
      if (!this.validateForm()) {
        this.popupMessage = 'Por favor, asegúrate de que todos los campos estén correctamente llenos.';
        this.togglePopup();
        return;
      }

      const userExists = users.some(user => user.email === this.registerEmail);
      if (userExists) {
        this.popupMessage = 'Ya existe un usuario con ese correo electrónico.';
        this.togglePopup();
        return;
      }

      const newUser = {
        id: users.length + 1,
        name: this.registerName,
        email: this.registerEmail,
        description: 'Nuevo usuario',
      };

      this.popupMessage = 'Bienvenido, ' + this.registerName + '.';
      this.togglePopup();

      this.registerName = '';
      this.registerEmail = '';
      this.registerPassword = '';
      this.registerConfirmPassword = '';
      this.registerCompanyName = '';
      this.registerURL = '';
    },
    validateForm() {
      return this.registerPassword === this.registerConfirmPassword;
    }
  }
}
</script>

<style scoped>
.auth-container {
    background-color: #f5e2b7;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    width: 350px;
    margin: auto;
}
.auth-tabs, .roles-tabs {
    display: flex;
    margin-bottom: 20px;
}
.auth-tab, .role-tab {
    flex: 1;
    text-align: center;
    padding: 10px;
    cursor: pointer;
    background-color: #d0a671;
    color: white;
    border-radius: 5px;
}
.auth-tab.active, .role-tab.active {
    background-color: #8b5e34;
    color: #fff;
}
input {
    width: 100%;
    padding: 10px;
    margin-bottom: 10px;
    border: none;
    border-radius: 5px;
    box-sizing: border-box;
}
button {
    width: 100%;
    padding: 10px;
    background-color: #8b5e34;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}
button:hover {
    background-color: #5b3920;
}
.popup {
  position: fixed;
  top: 20%;
  left: 50%;
  transform: translateX(-50%);
  background-color: #f5e2b7;
  color: #8b5e34;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 2px 15px rgba(0,0,0,0.2);
  display: none;
  z-index: 100;
}
.popup.show {
  display: block;
  animation: fadeinout 3s forwards;
}
@keyframes fadeinout {
  0%, 100% { opacity: 0; }
  10%, 90% { opacity: 1; }
}
</style>
