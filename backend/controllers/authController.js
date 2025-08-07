const jwt = require('jsonwebtoken');
const Usuario = require('../models/Usuario');
const { jwtSecret } = require('../utils/jwtUtils');

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const usuario = await Usuario.findByEmail(email);
    
    if (!usuario || usuario.password !== password) {
      return res.status(401).json({ error: 'Credenciales inválidas' });
    }
    
    const token = jwt.sign(
      { id: usuario.usuario_id, email: usuario.email, esAdmin: usuario.es_admin },
      jwtSecret,
      { expiresIn: process.env.JWT_EXPIRES_IN }
    );
    
    res.json({ token, usuario: { nombre: usuario.nombre, apellido: usuario.apellido, esAdmin: usuario.es_admin } });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.register = async (req, res) => {
  try {
    const { email, password, nombre, apellido } = req.body;
    const usuarioId = await Usuario.create({ email, password, nombre, apellido });
    res.status(201).json({ message: 'Usuario registrado', usuarioId });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};