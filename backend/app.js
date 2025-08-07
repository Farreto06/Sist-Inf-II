const express = require('express');
const app = express();
const applyMiddleware = require('./config/middleware');
const errorHandler = require('./utils/errorHandler');

// Middlewares
applyMiddleware(app);

// Routes
app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/lanchas', require('./routes/lanchaRoutes'));
app.use('/api/reservas', require('./routes/reservaRoutes'));
app.use('/api/pagos', require('./routes/pagoRoutes'));
app.use('/api/admin', require('./routes/adminRoutes'));

// Error handling
app.use(errorHandler);

module.exports = app;