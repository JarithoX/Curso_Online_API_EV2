// Middleware simple de autenticación por header
// Lee la clave esperada desde process.env.AUTH_KEY
module.exports = (req, res, next) => {
  const expected = process.env.AUTH_KEY;
  const provided = req.header('Clave-De-Autenticacion');
  
  if (!expected) {
    // Si no hay clave configurada, denegar por seguridad
    return res.status(500).json({ 
      error: 'Error de configuración del servidor', 
      message: 'La clave de autenticación no está configurada en el servidor' 
    });
  }
  
  if (!provided) {
    return res.status(401).json({ 
      error: 'Falta clave de autenticación', 
      message: 'Debes incluir el header "Clave-De-Autenticacion"',
      ejemplo: {
        header: 'Clave-De-Autenticacion',
        value: 'tu-clave-aqui'
      }
    });
  }
  
  if (provided !== expected) {
    return res.status(403).json({ 
      error: 'Clave de autenticación inválida', 
      message: 'La clave proporcionada no es correcta'
    });
  }
  
  next();
};
