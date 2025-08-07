const express = require('express');
const router = express.Router();
const reservaController = require('../controllers/reservaController');
const authMiddleware = require('../middlewares/authMiddleware');

router.use(authMiddleware.protect);

router.post('/', reservaController.createReserva);
router.get('/mis-reservas', reservaController.getUserReservas);
router.patch('/:id/cancelar', reservaController.cancelReserva);

module.exports = router;