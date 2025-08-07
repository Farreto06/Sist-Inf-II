import db from '../config/db.js';

async function resetDatabase() {
  try {
    await db.execute('DROP DATABASE IF EXISTS test_reservas_lanchas');
    console.log('✅ Base de datos de prueba eliminada');
  } catch (error) {
    console.error('❌ Error limpiando la base de datos:', error);
    process.exit(1);
  } finally {
    await db.end();
  }
}

await resetDatabase();