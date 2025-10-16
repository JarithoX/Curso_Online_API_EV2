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

//Metodo para obtener los cursos
app.get('/cursos', async (req, res) => {
    try{
        const datos = await admin.firestore().collection('cursos').get()
        const cursos = []

        datos.forEach(doc => {
            cursos.push({id: doc.id, ...doc.data()})
        });
        res.status(200).json(cursos)
        console.log(cursos)
    } catch (error) {
        res.status(500).send('Error al obtener los cursos de Firebase: '+error.message);
    }
});

//Puerto donde se ejecutara
const PORT = process.env.PORT || 3000;
app.listen(PORT, '0.0.0.0', () => {
    console.log(` ========= API Cursos =========
 Servidor Compilado en:
        - http://localhost:${PORT}/cursos
        - http://192.168.100.97:${PORT}/cursos`)
});