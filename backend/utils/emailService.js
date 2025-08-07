// utils/emailService.js
const nodemailer = require('nodemailer');
const dotenv = require('dotenv');
dotenv.config();

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

exports.sendConfirmationEmail = async (toEmail, reservaId, fecha) => {
  try {
    await transporter.sendMail({
      from: `"Reservas Tucacas" <${process.env.SMTP_USER}>`,
      to: toEmail,
      subject: 'Confirmación de Reserva',
      html: `
        <h1>¡Reserva Confirmada!</h1>
        <p>Tu reserva #${reservaId} para el ${fecha} ha sido confirmada.</p>
        <p>Gracias por reservar con nosotros.</p>
      `,
    });
    console.log(`Email de confirmación enviado a ${toEmail}`);
  } catch (error) {
    console.error('Error enviando email:', error);
  }
};