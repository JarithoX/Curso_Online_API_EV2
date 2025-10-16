const express = require('express')
const admin = require('firebase-admin')
const db = require('./serviceAccountKey.json')
const cors = require('cors')

//Conexión a Firebase
admin.initializeApp({
  credential: admin.credential.cert(db)
})

const app = express();
app.use(cors());
app.use(express.json());

//Metodo para obtener estudiantes
app.get('/estudiantes', async (req, res) => {
    try{
        const datos = await admin.firestore().collection('estudiantes').get()
        const estudiantes = []

        datos.forEach(doc => {
            estudiantes.push({id: doc.id, ...doc.data()})
        });
        res.status(200).json(estudiantes)
        console.log(estudiantes)
    } catch (error) {
        res.status(500).send('Error al obtener estudiantes de Firebase: '+error.message);
    }
});

//Puerto donde se ejecutara
const PORT = process.env.PORT || 3000;
app.listen(PORT, '0.0.0.0', () => {
    console.log(` ========= API Estudiantes =========
 Servidor Compilado en:
        - http://localhost:${PORT}/estudiantes
        - http://192.168.100.97:${PORT}/estudiantes`)
});