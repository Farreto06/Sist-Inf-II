// utils/errorHandler.js
const errorHandler = (err, req, res, next) => {
  console.error(err.stack);
  
  // Manejar errores específicos
  if (err.name === 'ValidationError') {
    return res.status(400).json({
      error: 'Error de validación',
      details: err.errors
    });
  }
  
  if (err.name === 'UnauthorizedError') {
    return res.status(401).json({ error: 'No autorizado' });
  }
  
  if (err.name === 'NotFoundError') {
    return res.status(404).json({ error: 'Recurso no encontrado' });
  }
  
  // Error genérico
  res.status(500).json({ 
    error: 'Error interno del servidor',
    message: err.message
  });
};

module.exports = errorHandler;