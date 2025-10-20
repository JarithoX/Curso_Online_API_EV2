// Middleware de validación simple por entidad
// Uso: const validate = require('../middlewares/validateData');
// router.post('/', validate('estudiantes'), controller.addEstudiante)
// Para PUT/PATCH, validará solo los campos enviados

const rules = {
  estudiantes: (body, req) => {
    const required = ['nombre','apellido','email','rut'];
    // En POST requerimos todos los campos, en PUT/PATCH solo validamos los que vienen
    if (req.method === 'POST') {
      const missing = required.filter(f => !body || body[f] === undefined || body[f] === '');
      return missing.length ? `Faltan campos: ${missing.join(', ')}` : null;
    }
    // Para PUT/PATCH, solo validamos que los campos enviados no estén vacíos
    const invalidFields = Object.keys(body).filter(f => 
      required.includes(f) && (body[f] === undefined || body[f] === '')
    );
    return invalidFields.length ? `Campos inválidos: ${invalidFields.join(', ')}` : null;
  },
  cursos: (body, req) => {
    const required = ['nombre','descripcion'];
    if (req.method === 'POST') {
      const missing = required.filter(f => !body || body[f] === undefined || body[f] === '');
      return missing.length ? `Faltan campos: ${missing.join(', ')}` : null;
    }
    const invalidFields = Object.keys(body).filter(f => 
      required.includes(f) && (body[f] === undefined || body[f] === '')
    );
    return invalidFields.length ? `Campos inválidos: ${invalidFields.join(', ')}` : null;
  },
  profesores: (body, req) => {
    const required = ['nombre','email'];
    if (req.method === 'POST') {
      const missing = required.filter(f => !body || body[f] === undefined || body[f] === '');
      return missing.length ? `Faltan campos: ${missing.join(', ')}` : null;
    }
    const invalidFields = Object.keys(body).filter(f => 
      required.includes(f) && (body[f] === undefined || body[f] === '')
    );
    return invalidFields.length ? `Campos inválidos: ${invalidFields.join(', ')}` : null;
  },
  evaluaciones: (body, req) => {
    const required = ['nombre','curso_id'];
    if (req.method === 'POST') {
      const missing = required.filter(f => !body || body[f] === undefined || body[f] === '');
      return missing.length ? `Faltan campos: ${missing.join(', ')}` : null;
    }
    const invalidFields = Object.keys(body).filter(f => 
      required.includes(f) && (body[f] === undefined || body[f] === '')
    );
    return invalidFields.length ? `Campos inválidos: ${invalidFields.join(', ')}` : null;
  },
  certificados: (body, req) => {
    const required = ['nombre','estudiante_id','curso_id'];
    if (req.method === 'POST') {
      const missing = required.filter(f => !body || body[f] === undefined || body[f] === '');
      return missing.length ? `Faltan campos: ${missing.join(', ')}` : null;
    }
    const invalidFields = Object.keys(body).filter(f => 
      required.includes(f) && (body[f] === undefined || body[f] === '')
    );
    return invalidFields.length ? `Campos inválidos: ${invalidFields.join(', ')}` : null;
  },
  matriculas: (body, req) => {
    const required = ['estudiante_id','curso_id'];
    if (req.method === 'POST') {
      const missing = required.filter(f => !body || body[f] === undefined || body[f] === '');
      return missing.length ? `Faltan campos: ${missing.join(', ')}` : null;
    }
    const invalidFields = Object.keys(body).filter(f => 
      required.includes(f) && (body[f] === undefined || body[f] === '')
    );
    return invalidFields.length ? `Campos inválidos: ${invalidFields.join(', ')}` : null;
  }
};

module.exports = function validate(entity) {
  return (req, res, next) => {
    const validator = rules[entity];
    if (!validator) return res.status(500).json({ error: 'Validador no encontrado para la entidad: ' + entity });
    const err = validator(req.body, req);
    if (err) return res.status(400).json({ error: err });
    next();
  }
}
