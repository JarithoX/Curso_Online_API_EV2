const db = require('../config/firebase')


//Metodo para obtener profesores
exports.getProfesores = async (req, res) => {
    try{
        const datos = await db.collection('profesores').get()
        const profesores = datos.docs.map(doc => ({id: doc.id, ...doc.data()}) );

        res.status(200).json(profesores)
        console.log(profesores)
    } catch (error) {
        res.status(500).send('Error al obtener profesores de Firebase: '+error.message);
    }
};

//Obtener profesor por ID
exports.getProfesorById = async (req, res) => {
    try {
        const id = req.params.id;
        const doc = await db.collection('profesores').doc(id).get();
        if (!doc.exists) {
            return res.status(404).send('Profesor no encontrado');
        }
        res.status(200).json({ id: doc.id, ...doc.data() });
    }catch (error) {
        res.status(500).send('Error al obtener el profesor de Firebase: ' + error.message);
    }
};

exports.addProfesor = async (req, res) => {
    try {
        const nuevoProfesor = req.body;
        const docRef = await db.collection('profesores').add(nuevoProfesor);
        res.status(201).json({ id: docRef.id, ...nuevoProfesor });
    } catch (error) {
        res.status(500).send('Error al agregar el profesor a Firebase: ' + error.message);
    }
};

exports.updateProfesor = async (req, res) => {
    try{

    } catch (error) {

    }
};

exports.deleteProfesor = async (req, res) => {
    try{

    } catch (error) {

    }
};
