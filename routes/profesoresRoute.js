const express = require('express');
const router = express.Router();
const profesoresController = require('../controllers/profesoresController');
const validate = require('../middlewares/validateData');

router.get('/', profesoresController.getProfesores);
router.get('/:id', profesoresController.getProfesorById);
router.post('/', validate('profesores'), profesoresController.addProfesor);
router.put('/:id', validate('profesores'), profesoresController.updateProfesor);
router.delete('/:id', profesoresController.deleteProfesor);

module.exports = router;
