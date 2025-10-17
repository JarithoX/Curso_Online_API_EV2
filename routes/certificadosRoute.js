const express = require('express');
const router = express.Router();
const certificadosController = require('../controllers/certificadosController');
const validate = require('../middlewares/validateData');

router.get('/', certificadosController.getCertificados);
router.get('/:id', certificadosController.getCertificadoById);
router.post('/', validate('certificados'), certificadosController.addCertificado);
router.put('/:id', validate('certificados'), certificadosController.updateCertificado);
router.delete('/:id', certificadosController.deleteCertificado);

module.exports = router;
