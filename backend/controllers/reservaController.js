const Reserva = require('../models/Reserva');
const Lancha = require('../models/Lancha');
const Pago = require('../models/Pago');
const { sendConfirmationEmail } = require('../utils/emailService');

exports.createReserva = async (req, res) => {
  try {
    const { lanchaId, fecha } = req.body;
    const usuarioId = req.user.id;

    // Verificar disponibilidad
    const disponible = await Lancha.checkDisponibilidad(lanchaId, fecha);
    if (!disponible) {
      return res.status(400).json({ error: 'Lancha no disponible en esa fecha' });
    }

    // Crear reserva
    const reservaId = await Reserva.create({ usuarioId, lanchaId, fecha });
    
    // Crear pago pendiente
    const pagoId = await Pago.create({
      reservaId,
      monto: req.body.monto,
      metodo: req.body.metodo
    });

    // Enviar email de confirmación
    await sendConfirmationEmail(req.user.email, reservaId, fecha);

    res.status(201).json({ reservaId, pagoId });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.cancelReserva = async (req, res) => {
  try {
    const { id } = req.params;
    await Reserva.updateEstado(id, 'CANCELADA');
    await Pago.updateEstadoByReserva(id, 'REEMBOLSADO');
    res.json({ message: 'Reserva cancelada' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};