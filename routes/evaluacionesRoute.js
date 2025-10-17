const express = require('express');
const router = express.Router();
const evaluacionesController = require('../controllers/evaluacionesController');
const validate = require('../middlewares/validateData');

router.get('/', evaluacionesController.getEvaluaciones);
router.get('/:id', evaluacionesController.getEvaluacionById);
router.post('/', validate('evaluaciones'), evaluacionesController.addEvaluacion);
router.put('/:id', validate('evaluaciones'), evaluacionesController.updateEvaluacion);
router.delete('/:id', evaluacionesController.deleteEvaluacion);

module.exports = router;
