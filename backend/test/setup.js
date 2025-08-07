import db from '../config/db.js';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function setupDatabase() {
  try {
    // Crear base de datos de prueba
    await db.execute('CREATE DATABASE IF NOT EXISTS test_reservas_lanchas');
    await db.execute('USE test_reservas_lanchas');

    // Ejecutar script SQL
    const sqlPath = path.join(__dirname, '../database/schema.sql');
    const sql = fs.readFileSync(sqlPath, 'utf8');
    
    // Dividir por sentencias SQL
    const statements = sql.split(/;\s*$/m)
      .filter(statement => statement.trim().length > 0);

    for (const statement of statements) {
      try {
        await db.execute(statement);
      } catch (error) {
        console.error(`Error ejecutando: ${statement.substring(0, 50)}...`, error);
        throw error;
      }
    }

    console.log('✅ Base de datos de prueba configurada correctamente');
  } catch (error) {
    console.error('❌ Error configurando la base de datos de prueba:', error);
    process.exit(1);
  }
}

await setupDatabase();