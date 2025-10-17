const express = require('express');
const router = express.Router();
const cursosController = require('../controllers/cursosController');
const validate = require('../middlewares/validateData');

router.get('/', cursosController.getCursos);
router.get('/:id', cursosController.getCursoById);
router.post('/', validate('cursos'), cursosController.addCurso);
router.put('/:id', validate('cursos'), cursosController.updateCurso);
router.delete('/:id', cursosController.deleteCurso);

module.exports = router;