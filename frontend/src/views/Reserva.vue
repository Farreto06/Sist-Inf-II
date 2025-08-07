<template>
  <div class="reserva-container">
    <h2>Reservar Lancha</h2>
    <form class="reserva-form">
      <label>Fecha de la reserva</label>
      <input type="date" required />
      <label>Detalles adicionales</label>
      <textarea placeholder="¿Algún requerimiento especial?"></textarea>
      <router-link to="/pasajeros"><button type="submit">Continuar</button></router-link>
    </form>
    <router-link to="/lanchas">Volver a lanchas</router-link>
  </div>
</template>

<script>
export default {
  name: 'Reserva',
};
</script>

<style scoped>
.reserva-container {
  max-width: 400px;
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
.reserva-form {
  display: flex;
  flex-direction: column;
  gap: 16px;
}
input, textarea {
  padding: 10px 14px;
  border: 1px solid #b3c6e0;
  border-radius: 8px;
  font-size: 1rem;
}
button {
    margin-left: 150px;
  background: #1976d2;
  color: #fff;
  border: none;
  border-radius: 8px;
  padding: 12px;
  font-weight: bold;
  cursor: pointer;
  transition: background 0.2s;
}
button:hover {
  background: #1565c0;
}
</style> 