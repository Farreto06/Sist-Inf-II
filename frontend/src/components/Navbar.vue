<template>
  <nav class="navbar">
    <div class="logo">Tucacas Tours</div>
    <ul>
      <li><router-link to="/">Inicio</router-link></li>
      <li><router-link to="/lanchas">Lanchas</router-link></li>
      <li><router-link to="/reserva">Reservar</router-link></li>
      <li><router-link to="/pago">Pago</router-link></li>
      <li><router-link to="/registro">Registro</router-link></li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'NavBar',
};
</script>

<style scoped>
.navbar {
  width: 100%;
  background: #1976d2;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 40px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.08);
}
.logo {
  font-size: 1.5rem;
  font-weight: bold;
  letter-spacing: 1px;
}
ul {
  list-style: none;
  display: flex;
  gap: 24px;
  margin: 0;
  padding: 0;
}
li {
  font-size: 1rem;
}
a {
  color: #fff;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.2s;
}
a.router-link-exact-active {
  border-bottom: 2px solid #fff;
}
a:hover {
  color: #4fc3f7;
}
</style>
