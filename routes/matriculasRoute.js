const express = require('express');
const router = express.Router();
const matriculasController = require('../controllers/matriculasController');

router.get('/', matriculasController.getMatriculas);
//router.get('/matriculas/:id', matriculasController.getMatriculaById);
//router.post('/matriculas', matriculasController.addMatricula);
//router.put('/matriculas/:id', matriculasController.updateMatricula);
//router.delete('/matriculas/:id', matriculasController.deleteMatricula);

module.exports = router;