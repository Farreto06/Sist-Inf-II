<template>
  <div class="registro-container">
    <h2>Registro de Usuario</h2>
    <form class="registro-form">
      <input type="text" placeholder="Nombre" required />
      <input type="text" placeholder="Apellido" required />
      <input type="email" placeholder="Correo electrónico" required />
      <input type="password" placeholder="Contraseña" required />
      <button type="submit">Registrarse</button>
    </form>
    <router-link to="/">Volver al inicio</router-link>
  </div>
</template>

<script>
export default {
  name: 'RegistroUsuario',
};
</script>

<style scoped>
.registro-container {
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
.registro-form {
  display: flex;
  flex-direction: column;
  gap: 16px;
}
input {
  padding: 10px 14px;
  border: 1px solid #b3c6e0;
  border-radius: 8px;
  font-size: 1rem;
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
}
button:hover {
  background: #1565c0;
}
</style>
