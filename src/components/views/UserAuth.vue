<template>
  <div class="auth-container">
    <div class="auth-tabs">
      <div class="auth-tab" :class="{active: activeTab === 'login'}" @click="activeTab = 'login'">Inicio de cuenta</div>
      <div class="auth-tab" :class="{active: activeTab === 'register'}" @click="activeTab = 'register'">Registrar cuenta</div>
    </div>
    <div v-if="activeTab === 'login'" class="login-form">
      <form @submit.prevent="login">
        <input type="email" placeholder="Correo" v-model="loginEmail" required>
        <input type="password" placeholder="Contraseña" v-model="loginPassword" required>
        <button type="submit">Continuar</button>
      </form>
    </div>
    <div v-if="activeTab === 'register'" class="register-form">
      <div class="roles-tabs">
        <div class="role-tab" :class="{active: selectedRole === 'buyer'}" @click="selectedRole = 'buyer'">Usuario Comprador</div>
        <div class="role-tab" :class="{active: selectedRole === 'library'}" @click="selectedRole = 'library'">Usuario Proveedor</div>
      </div>
      <form @submit.prevent="register">
        <div v-if="selectedRole === 'library'">
          <!-- Supplier User Registration Fields -->
          <input type="text" placeholder="Nombre empresa" v-model="registerCompanyName" required>
          <input type="email" placeholder="Correo" v-model="registerEmail" required>
          <input type="password" placeholder="Contraseña" v-model="registerPassword" required>
          <input type="password" placeholder="Repetir Contraseña" v-model="registerConfirmPassword" required>
          <input type="text" placeholder="URL" v-model="registerURL" required>
        </div>
        <div v-else>
          <!-- Buyer Registration Fields -->
          <input type="text" placeholder="Nombre" v-model="registerName" required>
          <input type="email" placeholder="Correo" v-model="registerEmail" required>
          <input type="password" placeholder="Contraseña" v-model="registerPassword" required>
          <input type="password" placeholder="Repetir Contraseña" v-model="registerConfirmPassword" required>
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
    togglePopup(message) {
      this.popupMessage = message;
      this.showPopup = true;
      setTimeout(() => {
        this.showPopup = false;
      }, 2500);
    },
    async login() {
      if (!this.loginEmail || !this.loginPassword) {
        this.togglePopup('Por favor, ingresa un correo y una contraseña válidos.');
        return;
      }

      const users = await this.fetchUsers();
      const matchingUser = users.find((userItem) => userItem.email === this.loginEmail && userItem.password === this.loginPassword);
      if (matchingUser) {
        sessionStorage.setItem('user', JSON.stringify(matchingUser));
        this.togglePopup('Bienvenido ' + matchingUser.name + '.');
      } else {
        this.togglePopup('Credenciales incorrectas. Por favor, intenta de nuevo.');
      }
    },
    async register() {
      if (!this.validateForm()) {
        this.togglePopup('Por favor, asegúrate de que todos los campos estén correctamente llenos y que las contraseñas coincidan.');
        return;
      }

      const users = await this.fetchUsers();
      const userExists = users.some(user => user.email === this.registerEmail);
      if (userExists) {
        this.togglePopup('Ya existe un usuario con ese correo electrónico.');
        return;
      }

      const newUser = {
        id: users.length + 1,
        name: this.registerName,
        email: this.registerEmail,
        password: this.registerPassword, // Agrega la contraseña al nuevo usuario
        role: this.selectedRole,
        // Agrega más campos según sea necesario
      };

      users.push(newUser); // Agrega el nuevo usuario al array
      // Anotacion:
      // Guarda los usuarios actualizados
      // Este paso puede variar según cómo estés manejando tus datos
      // Si estás utilizando algún backend o almacenamiento persistente, ajusta esta lógica en consecuencia
      // Por ejemplo:
      // await this.saveUsers(users);

      this.togglePopup('Bienvenido, ' + this.registerName + '. Ahora puedes iniciar sesión.');
      this.resetRegistrationFields();
    },
    validateForm() {
      return this.registerPassword === this.registerConfirmPassword;
    },
    resetRegistrationFields() {
      this.registerName = '';
      this.registerEmail = '';
      this.registerPassword = '';
      this.registerConfirmPassword = '';
      this.registerCompanyName = '';
      this.registerURL = '';
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