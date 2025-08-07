const app = require('./app');
const db = require('./config/db');
const PORT = process.env.PORT || 5000;

// Verificar conexión a DB
db.getConnection()
  .then(() => {
    console.log('Conexión a DB establecida');
    app.listen(PORT, () => {
      console.log(`Servidor corriendo en puerto ${PORT}`);
    });
  })
  .catch(err => {
    console.error('Error conectando a DB:', err);
    process.exit(1);
  });