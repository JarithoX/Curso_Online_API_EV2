// Middleware simple de autenticación por header
// Lee la clave esperada desde process.env.AUTH_KEY o process.env.CLAVE_DE_AUTENTICACION
module.exports = (req, res, next) => {
  const expected = process.env.AUTH_KEY;
  const provided = req.header('Clave-De-Autenticacion');
  if (!expected) {
    // Si no hay clave configurada, denegar por seguridad
    return res.status(500).json({ error: 'Server misconfigured: AUTH_KEY not set' });
  }
  if (!provided || provided !== expected) {
    return res.status(401).json({ error: 'No autorizado: clave inválida' });
  }
  next();
};
