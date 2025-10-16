const express = require('express');
const router = express.Router();
const profesoresController = require('../controllers/profesoresController');

router.get('/', profesoresController.getProfesores);
router.get('/:id', profesoresController.getProfesorById);
router.post('/', profesoresController.addProfesor);
router.put('/:id', profesoresController.updateProfesor);
router.delete('/:id', profesoresController.deleteProfesor);

module.exports = router;
