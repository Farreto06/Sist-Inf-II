const db = require('../config/db');

class Lancha {
  static async findAll() {
    const [rows] = await db.execute(
      `SELECT l.*, 
       (SELECT AVG(calificacion) FROM resena WHERE lancha_id = l.lancha_id) AS rating,
       (SELECT COUNT(*) FROM resena WHERE lancha_id = l.lancha_id) AS total_resenas
       FROM lancha l`
    );
    return rows;
  }

  static async findById(id) {
    const [rows] = await db.execute('SELECT * FROM lancha WHERE lancha_id = ?', [id]);
    return rows[0];
  }

  static async checkDisponibilidad(lanchaId, fecha) {
    const [rows] = await db.execute(
      `SELECT 1 FROM disponibilidad 
       WHERE lancha_id = ? AND fecha = ? 
       UNION
       SELECT 1 FROM reserva 
       WHERE lancha_id = ? AND fecha = ? AND estado = 'CONFIRMADA'`,
      [lanchaId, fecha, lanchaId, fecha]
    );
    return rows.length === 0;
  }

  static async getImagenes(lanchaId) {
    const [rows] = await db.execute('SELECT * FROM imagen WHERE lancha_id = ? ORDER BY orden', [lanchaId]);
    return rows;
  }

  static async getResenas(lanchaId) {
    const [rows] = await db.execute(
      `SELECT r.*, u.nombre, u.apellido 
       FROM resena r
       JOIN usuario u ON r.usuario_id = u.usuario_id
       WHERE r.lancha_id = ? AND r.aprobada = TRUE`,
      [lanchaId]
    );
    return rows;
  }
}

module.exports = Lancha;