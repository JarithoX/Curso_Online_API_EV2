const express = require('express');
const router = express.Router();
const matriculasController = require('../controllers/matriculasController');

router.get('/', matriculasController.getMatriculas);
router.get('/:id', matriculasController.getMatriculaById);
router.post('/', matriculasController.addMatricula);
router.put('/:id', matriculasController.updateMatricula);
router.patch('/:id', matriculasController.patchMatricula);
router.delete('/:id', matriculasController.deleteMatricula);

module.exports = router;