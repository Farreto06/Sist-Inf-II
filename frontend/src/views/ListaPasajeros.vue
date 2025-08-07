<template>
  <div class="pasajeros-container">
    <h2>Lista de Pasajeros</h2>
    <form class="pasajeros-form">
      <div v-for="(pasajero, idx) in pasajeros" :key="idx" class="pasajero-item">
        <input v-model="pasajero.nombre" placeholder="Nombre del pasajero" required />
        <input v-model="pasajero.edad" type="number" placeholder="Edad" min="0" required />
      </div>
      <button type="button" @click="agregarPasajero">Agregar pasajero</button>
      <button type="submit">Continuar</button>
    </form>
    <router-link to="/reserva">Volver a reserva</router-link>
  </div>
</template>

<script>
export default {
  name: 'ListaPasajeros',
  data() {
    return {
      pasajeros: [
        { nombre: '', edad: '' },
      ],
    };
  },
  methods: {
    agregarPasajero() {
      this.pasajeros.push({ nombre: '', edad: '' });
    },
  },
};
</script>

<style scoped>
.pasajeros-container {
  max-width: 500px;
  margin: 60px auto;
  background: #fff;
  border-radius: 16px;
  box-shadow: 0 2px 12px rgba(0,0,0,0.08);
  padding: 32px 24px;
  color: #1976d2;
}
h2 {
  text-align: center;
  margin-bottom: 24px;
}
.pasajeros-form {
  display: flex;
  flex-direction: column;
  gap: 16px;
}
.pasajero-item {
  display: flex;
  gap: 12px;
}
input {
  padding: 10px 14px;
  border: 1px solid #b3c6e0;
  border-radius: 8px;
  font-size: 1rem;
  flex: 1;
}
button {
  background: #1976d2;
  color: #fff;
  border: none;
  border-radius: 8px;
  padding: 12px;
  font-weight: bold;
  cursor: pointer;
  transition: background 0.2s;
  margin-top: 8px;
}
button[type="button"] {
  background: #4fc3f7;
  color: #1976d2;
}
button[type="button"]:hover {
  background: #1976d2;
  color: #fff;
}
button[type="submit"]:hover {
  background: #1565c0;
}
</style> 