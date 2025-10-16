const express = require('express');
const router = express.Router();
const cursosController = require('../controllers/cursosController');

router.get('/', cursosController.getCursos);
//router.get('/cursos/:id', cursosController.getCursoById);
//router.post('/cursos', cursosController.addCurso);
//router.put('/cursos/:id', cursosController.updateCurso);
//router.delete('/cursos/:id', cursosController.deleteCurso);

module.exports = router;