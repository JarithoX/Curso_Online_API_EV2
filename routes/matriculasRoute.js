const express = require('express');
const router = express.Router();
const matriculasController = require('../controllers/matriculasController');
const validate = require('../middlewares/validateData');

router.get('/', matriculasController.getMatriculas);
router.get('/:id', matriculasController.getMatriculaById);
router.patch('/:id', matriculasController.patchMatricula);
router.delete('/:id', matriculasController.deleteMatricula);
router.post('/', validate('matriculas'), matriculasController.addMatricula);
router.put('/:id', validate('matriculas'), matriculasController.updateMatricula);

module.exports = router;