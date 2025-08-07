// utils/jwtUtils.js
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();

const jwtSecret = process.env.JWT_SECRET;

exports.verifyToken = (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];
  
  if (!token) {
    return res.status(401).json({ error: 'Acceso no autorizado' });
  }

  try {
    const decoded = jwt.verify(token, jwtSecret);
    req.user = decoded;
    next();
  } catch (error) {
    res.status(401).json({ error: 'Token inválido o expirado' });
  }
};

exports.isAdmin = (req, res, next) => {
  if (!req.user?.esAdmin) {
    return res.status(403).json({ error: 'Acceso restringido a administradores' });
  }
  next();
};

module.exports.jwtSecret = jwtSecret;