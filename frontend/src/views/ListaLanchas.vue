<template>
  <div class="lanchas-container">
    <h2>Lista de Lanchas Disponibles</h2>
    <div class="lanchas-list">
      <div class="lancha-card" v-for="lancha in lanchas" :key="lancha.id">
        <img :src="lancha.imagen" alt="Lancha" />
        <h3>{{ lancha.nombre }}</h3>
        <p>Capacidad: {{ lancha.capacidad }} personas</p>
        <p>{{ lancha.descripcion }}</p>
        <router-link :to="'/reserva?id=' + lancha.id" class="btn-reservar">Reservar</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ListaLanchas',
  data() {
    return {
      lanchas: [
        { id: 1, nombre: 'Lancha Caribe', capacidad: 8, descripcion: 'Ideal para paseos familiares.', imagen: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80' },
        { id: 2, nombre: 'Lancha Aventura', capacidad: 12, descripcion: 'Perfecta para grupos grandes.', imagen: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80' },
      ],
    };
  },
};
</script>

<style scoped>
.lanchas-container {
  padding: 40px 0;
  background: #f4f8fb;
  min-height: 100vh;
}
h2 {
  text-align: center;
  color: #1976d2;
  margin-bottom: 32px;
}
.lanchas-list {
  display: flex;
  gap: 32px;
  justify-content: center;
  flex-wrap: wrap;
}
.lancha-card {
  background: #fff;
  border-radius: 16px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.08);
  padding: 24px 20px;
  min-width: 260px;
  max-width: 320px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.lancha-card img {
  width: 100%;
  border-radius: 12px;
  margin-bottom: 16px;
}
.btn-reservar {
  margin-top: 16px;
  background: #1976d2;
  color: #fff;
  padding: 10px 24px;
  border-radius: 8px;
  text-decoration: none;
  font-weight: bold;
  transition: background 0.2s;
}
.btn-reservar:hover {
  background: #1565c0;
}
</style> 