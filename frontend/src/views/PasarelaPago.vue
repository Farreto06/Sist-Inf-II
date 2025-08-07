<template>
  <div class="pago-container">
    <h2>Pasarela de Pago</h2>
    <form class="pago-form">
      <label>Método de pago</label>
      <select required>
        <option value="">Selecciona un método</option>
        <option value="tarjeta">Tarjeta de crédito/débito</option>
        <option value="pago-movil">Pago Móvil</option>
        <option value="whatsapp">WhatsApp</option>
      </select>
      <button type="submit">Pagar</button>
    </form>
    <div class="info">
      <p>O se generará un mensaje con la información de la reserva para enviar por WhatsApp.</p>
    </div>
    <router-link to="/">Volver al inicio</router-link>
  </div>
</template>

<script>
export default {
  name: 'PasarelaPago',
};
</script>

<style scoped>
.pago-container {
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
.pago-form {
  display: flex;
  flex-direction: column;
  gap: 16px;
}
select {
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
.info {
  margin-top: 20px;
  font-size: 0.95rem;
  color: #333;
}
</style> 