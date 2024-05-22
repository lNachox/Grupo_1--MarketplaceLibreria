<template>
  <div class="complaints-container">
    <h1>Quejas</h1>
    <div v-for="complaint in complaints" :key="complaint.id" class="complaint-box">
      <p><strong>ID de Queja:</strong> {{ complaint.id }}</p>
      <p>{{ complaint.description }}</p>
    </div>
    <div class="add-complaint">
      <textarea v-model="newComplaint" placeholder="Añadir una nueva queja"></textarea>
      <button @click="addComplaint">Añadir Queja</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Quejas',
  data() {
    return {
      complaints: [],
      newComplaint: ''
    };
  },
  methods: {
    addComplaint() {
      if (this.newComplaint.trim() === '') {
        alert('La descripción de la queja no puede estar vacía.');
        return;
      }

      const newId = this.complaints.length > 0
        ? this.complaints[this.complaints.length - 1].id + 1
        : 1;

      this.complaints.push({
        id: newId,
        description: this.newComplaint
      });

      this.newComplaint = '';
    }
  }
};
</script>

<style scoped>
.complaints-container {
  padding: 2rem;
}

.complaint-box {
  border: 1px solid #ddd;
  padding: 1rem;
  margin-bottom: 1rem;
  border-radius: 5px;
  background-color: #f9f9f9;
}

.add-complaint {
  margin-top: 2rem;
}

.add-complaint textarea {
  width: 100%;
  height: 100px;
  margin-bottom: 1rem;
  padding: 0.5rem;
  border: 1px solid #ddd;
  border-radius: 5px;
  resize: none;
}

.add-complaint button {
  padding: 0.5rem 1rem;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.add-complaint button:hover {
  background-color: #45a049;
}
</style>