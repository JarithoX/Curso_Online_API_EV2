const admin = require("firebase-admin");
const serviceAccount = require("./serviceAccountKey.json");

// Inicializar la aplicación de Firebase solo si no ha sido inicializada previamente
if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
  });
}
//Exportar la instancia de Firestore
module.exports = admin.firestore();
