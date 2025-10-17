const express = require('express');
const router = express.Router();
const estudiantesController = require('../controllers/estudiantesController');
const validate = require('../middlewares/validateData');

router.get('/', estudiantesController.getEstudiantes);
router.get('/:id', estudiantesController.getEstudianteById);
router.post('/', validate('estudiantes'), estudiantesController.addEstudiante);
router.put('/:id', validate('estudiantes'), estudiantesController.updateEstudiante);
router.delete('/:id', estudiantesController.deleteEstudiante);

module.exports = router;