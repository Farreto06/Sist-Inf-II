const db = require('../config/db');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

class Usuario {
  // Crear un nuevo usuario
  static async crear({ email, password, nombre, apellido, es_admin = false }) {
    try {
      const hashedPassword = await bcrypt.hash(password, 10);
      const [result] = await db.execute(
        'INSERT INTO usuario (email, password, nombre, apellido, es_admin) VALUES (?, ?, ?, ?, ?)',
        [email, hashedPassword, nombre, apellido, es_admin]
      );
      return result.insertId;
    } catch (error) {
      throw new Error(`Error al crear usuario: ${error.message}`);
    }
  }

  // Obtener usuario por ID (sin password por defecto)
  static async obtenerPorId(id, incluirPassword = false) {
    try {
      const columns = incluirPassword ? '*' : 'usuario_id, email, nombre, apellido, es_admin, fecha_registro';
      const [rows] = await db.execute(
        `SELECT ${columns} FROM usuario WHERE usuario_id = ?`,
        [id]
      );
      return rows[0] || null;
    } catch (error) {
      throw new Error(`Error al obtener usuario: ${error.message}`);
    }
  }

  // Obtener usuario por email (para login)
  static async obtenerPorEmail(email) {
    try {
      const [rows] = await db.execute(
        'SELECT * FROM usuario WHERE email = ?',
        [email]
      );
      return rows[0] || null;
    } catch (error) {
      throw new Error(`Error al buscar usuario por email: ${error.message}`);
    }
  }

  // Actualizar usuario
  static async actualizar(id, { nombre, apellido, password }) {
    try {
      let query = 'UPDATE usuario SET nombre = ?, apellido = ?';
      const params = [nombre, apellido];

      if (password) {
        const hashedPassword = await bcrypt.hash(password, 10);
        query += ', password = ?';
        params.push(hashedPassword);
      }

      query += ' WHERE usuario_id = ?';
      params.push(id);

      const [result] = await db.execute(query, params);
      return result.affectedRows > 0;
    } catch (error) {
      throw new Error(`Error al actualizar usuario: ${error.message}`);
    }
  }

  // Eliminar usuario
  static async eliminar(id) {
    try {
      const [result] = await db.execute(
        'DELETE FROM usuario WHERE usuario_id = ?',
        [id]
      );
      return result.affectedRows > 0;
    } catch (error) {
      throw new Error(`Error al eliminar usuario: ${error.message}`);
    }
  }

  // Listar usuarios (con paginación)
  static async listar(pagina = 1, limite = 10) {
    try {
      const offset = (pagina - 1) * limite;
      const [rows] = await db.execute(
        'SELECT usuario_id, email, nombre, apellido, es_admin, fecha_registro FROM usuario LIMIT ? OFFSET ?',
        [limite, offset]
      );
      
      const [[{ total }]] = await db.execute(
        'SELECT COUNT(*) as total FROM usuario'
      );
      
      return {
        usuarios: rows,
        total,
        paginas: Math.ceil(total / limite),
        pagina: parseInt(pagina)
      };
    } catch (error) {
      throw new Error(`Error al listar usuarios: ${error.message}`);
    }
  }

  // Métodos de instancia (necesitan un usuario cargado primero)
  async validarPassword(password) {
    return await bcrypt.compare(password, this.password);
  }

  generarToken() {
    return jwt.sign(
      {
        id: this.usuario_id,
        email: this.email,
        es_admin: this.es_admin
      },
      process.env.JWT_SECRET,
      { expiresIn: '24h' }
    );
  }
}

module.exports = Usuario;