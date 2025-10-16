const express = require('express');
const router = express.Router();
const certificadosController = require('../controllers/certificadosController');

router.get('/', certificadosController.getCertificados);
router.get('/:id', certificadosController.getCertificadoById);
router.post('/', certificadosController.addCertificado);
router.put('/:id', certificadosController.updateCertificado);
router.delete('/:id', certificadosController.deleteCertificado);

module.exports = router;
