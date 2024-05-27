<template>
    <div class="supplier-profile">
      <h2>Editar Perfil de Proveedor</h2>
      <div class="profile-image">
        <img :src="profileImage" alt="Imagen de Perfil" v-if="profileImage" />
        <input type="file" @change="onImageSelected" />
      </div>
      <div class="profile-info">
        <p><strong>Nombre Proveedor:</strong>
          <input v-model="supplierProfile.name" type="text" />
        </p>
        <p><strong>Correo:</strong>
          <input v-model="supplierProfile.email" type="email" />
        </p>
        <p><strong>URL:</strong>
          <input v-model="supplierProfile.URL" type="text" />
        </p>
      </div>
      <div class="profile-description">
        <label for="description">Descripción del Proveedor:</label>
        <textarea id="description" v-model="supplierProfile.description"></textarea>
      </div>
      <div class="profile-actions">
        <button @click="saveProfile">Guardar</button>
        <button @click="resetForm">Restablecer</button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'editprofile',
    data() {
      return {
        profileImage: '',
        originalProfile: {},
        userProfile: {
          name: 'Nombre del Proveedor',
          email: 'correoempresa@ejemplo.com',
          URL: 'www.proveedorweb.cl',
          description: 'Descripción personal del usuario.'
        }
      };
    },
    created() {
      this.originalProfile = { ...this.supplierProfile };
    },
    methods: {
      onImageSelected(event) {
        const file = event.target.files[0];
        if (file) {
          const reader = new FileReader();
          reader.onload = (e) => {
            this.profileImage = e.target.result;
          };
          reader.readAsDataURL(file);
        }
      },
      saveProfile() {
        // Aquí podrías enviar los datos al servidor si fuese necesario
        console.log('Perfil guardado:', this.supplierProfile);
        this.$router.push({ name: 'ProductList' });
      },
      resetForm() {
        this.supplierProfile = { ...this.originalProfile };
      }
    }
  };
  </script>

<style scoped>
.supplier-profile {
  max-width: 600px;
  margin: auto;
  padding: 3rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: #E5D6A3;
}

.profile-image {
  text-align: center;
  margin-bottom: 1rem;
}

.profile-image img {
  max-width: 150px;
  max-height: 150px;
  border-radius: 50%;
  display: block;
  margin: 0 auto;
}

.profile-info {
  margin-bottom: 1rem;
}

.profile-info p {
  margin: 0.5rem 0;
}

.profile-description {
  margin-top: 1rem;
}

.profile-description textarea {
  width: 100%;
  height: 100px;
  resize: none;
}

</style>