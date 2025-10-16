const express = require('express');
const router = express.Router();
const estudiantesController = require('../controllers/estudiantesController');

router.get('/estudiantes', estudiantesController.getEstudiantes);
router.get('/estudiantes/:id', estudiantesController.getEstudianteById);
router.post('/estudiantes', estudiantesController.addEstudiante);
router.put('/estudiantes/:id', estudiantesController.updateEstudiante);
router.delete('/estudiantes/:id', estudiantesController.deleteEstudiante);

module.exports = router;