<template>
  <div class="landing-container">
    <header>
      <h1>Bienvenido a Margarita Tours</h1>
      <p>Reserva tu lancha y vive una experiencia inolvidable en el turismo náutico.</p>
      <router-link to="/registro" class="btn-main">Regístrate</router-link>
    </header>
    <section class="features">
      <div class="feature">
        <h2>Reserva Online</h2>
        <p>Elige tu lancha, fecha y realiza tu reserva en minutos.</p>
      </div>
      <div class="feature">
        <h2>Pago Seguro</h2>
        <p>Transacciones protegidas y confirmación inmediata.</p>
      </div>
      <div class="feature">
        <h2>Opiniones Reales</h2>
        <p>Lee reseñas de otros turistas y comparte tu experiencia.</p>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'LandingPage',
};
</script>

<style scoped>
.landing-container {
  min-height: 100vh;
  background: linear-gradient(135deg, #4fc3f7 0%, #1976d2 100%);
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 40px 0;
}
header {
  text-align: center;
  margin-bottom: 40px;
}
.btn-main {
  display: inline-block;
  margin-top: 20px;
  padding: 12px 32px;
  background: #fff;
  color: #1976d2;
  border-radius: 25px;
  font-weight: bold;
  text-decoration: none;
  transition: background 0.2s, color 0.2s;
}
.btn-main:hover {
  background: #1976d2;
  color: #fff;
}
.features {
  display: flex;
  gap: 32px;
  justify-content: center;
  flex-wrap: wrap;
}
.feature {
  background: rgba(255,255,255,0.1);
  border-radius: 16px;
  padding: 24px 32px;
  min-width: 220px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.08);
  text-align: center;
}
</style>
