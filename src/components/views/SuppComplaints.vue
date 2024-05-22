<template>
    <div class="complaints-container">
      <!-- Componente para visualizar el estado de las quejas -->
      <ComplaintsList :complaints="complaints" @respond="respondToComplaint" @changeStatus="changeComplaintStatus" />
      <!-- Componente para responder a una queja específica -->
      <RespondToComplaint v-if="selectedComplaint" :complaint="selectedComplaint" @close="closeRespondModal" @submit="submitResponse" />
    </div>
  </template>
  
  <script>
  import { ref } from 'vue';
  import ComplaintsList from './ComplaintsList.vue';
  import RespondToComplaint from './RespondToComplaint.vue';
  
  export default {
    components: {
      ComplaintsList,
      RespondToComplaint
    },
    setup() {
      // Estado de las quejas
      const complaints = ref([
        { id: 1, title: 'Queja 1', description: 'Descripción de la queja 1', status: 'Pendiente' },
        { id: 2, title: 'Queja 2', description: 'Descripción de la queja 2', status: 'Resuelta' },
        // Agregar más quejas según sea necesario
      ]);
  
      // Queja seleccionada para responder
      const selectedComplaint = ref(null);
  
      // Función para responder a una queja
      const respondToComplaint = (complaint) => {
        selectedComplaint.value = complaint;
      };
  
      // Función para cerrar el modal de respuesta
      const closeRespondModal = () => {
        selectedComplaint.value = null;
      };
  
      // Función para enviar la respuesta de la queja
      const submitResponse = (response) => {
        // Aquí podrías implementar la lógica para enviar la respuesta al servidor u otro destino
        // Por simplicidad, solo actualizaremos el estado de la queja localmente
        const index = complaints.value.findIndex(complaint => complaint.id === selectedComplaint.value.id);
        if (index !== -1) {
          complaints.value[index].status = 'Resuelta';
          complaints.value[index].response = response;
        }
        closeRespondModal();
      };
  
      // Función para cambiar el estado de una queja (por ejemplo, de 'Pendiente' a 'En Proceso')
      const changeComplaintStatus = (complaint, newStatus) => {
        // Aquí podrías implementar la lógica para cambiar el estado de la queja en el servidor u otro destino
        // Por simplicidad, solo actualizaremos el estado localmente
        const index = complaints.value.findIndex(c => c.id === complaint.id);
        if (index !== -1) {
          complaints.value[index].status = newStatus;
        }
      };
  
      return {
        complaints,
        respondToComplaint,
        selectedComplaint,
        closeRespondModal,
        submitResponse,
        changeComplaintStatus
      };
    }
  };
  </script>
  
  <style>
  /* Estilos opcionales para el contenedor de quejas */
  .complaints-container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  </style>
  