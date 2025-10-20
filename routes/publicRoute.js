const express = require('express');
const router = express.Router();

const estudiantesController = require('../controllers/estudiantesController');
const cursosController = require('../controllers/cursosController');
const profesoresController = require('../controllers/profesoresController');
const evaluacionesController = require('../controllers/evaluacionesController');
const certificadosController = require('../controllers/certificadosController');
const matriculasController = require('../controllers/matriculasController');

// Rutas públicas para obtener datos sin autenticación
router.get('/estudiantes', estudiantesController.getEstudiantes);
router.get('/cursos', cursosController.getCursos);
router.get('/profesores', profesoresController.getProfesores);
router.get('/evaluaciones', evaluacionesController.getEvaluaciones);
router.get('/certificados', certificadosController.getCertificados);
router.get('/matriculas', matriculasController.getMatriculas);

module.exports = router;