const admin = require('firebase-admin');

// Cargar dotenv (si está instalado y existe .env)
try { require('dotenv').config(); } catch (e) {}

let serviceAccount;
// 3 formas de cargar las credenciales de serviceAccount para conectar a Firebase
if (process.env.SERVICE_ACCOUNT_JSON) {
  try { serviceAccount = JSON.parse(process.env.SERVICE_ACCOUNT_JSON); } catch (err) {
    console.error('SERVICE_ACCOUNT_JSON no es JSON válido');
  }
} else if (process.env.SERVICE_ACCOUNT_BASE64) {
  try {
    const json = Buffer.from(process.env.SERVICE_ACCOUNT_BASE64, 'base64').toString('utf8');
    serviceAccount = JSON.parse(json);
  } catch (err) {
    console.error('SERVICE_ACCOUNT_BASE64 no es válido o JSON resultante inválido');
  }
} else {
  // fallback a archivo local (solo desarrollo)
  try { serviceAccount = require('./serviceAccountKey.json'); } catch (e) { /* no local file */ }
}

if (!admin.apps.length) {
  if (!serviceAccount) {
    throw new Error('Credenciales de Firebase no configuradas. Configure SERVICE_ACCOUNT_JSON o SERVICE_ACCOUNT_BASE64 o agregue serviceAccountKey.json en config/');
  }

  admin.initializeApp({ credential: admin.credential.cert(serviceAccount) });
}

module.exports = admin.firestore();
