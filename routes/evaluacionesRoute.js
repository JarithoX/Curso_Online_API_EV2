const express = require('express');
const router = express.Router();
const evaluacionesController = require('../controllers/evaluacionesController');

router.get('/', evaluacionesController.getEvaluaciones);
router.get('/:id', evaluacionesController.getEvaluacionById);
router.post('/', evaluacionesController.addEvaluacion);
router.put('/:id', evaluacionesController.updateEvaluacion);
router.delete('/:id', evaluacionesController.deleteEvaluacion);

module.exports = router;
