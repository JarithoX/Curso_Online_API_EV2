const db = require('../config/firebase')


//Metodo para obtener estudiantes
exports.getEstudiantes = async (req, res) => {
    try{
        const datos = await db.collection('estudiantes').get()
        const estudiantes = datos.docs.map(doc => ({id: doc.id, ...doc.data()}) );

        res.status(200).json(estudiantes)
        console.log(estudiantes)
    } catch (error) {
        res.status(500).send('Error al obtener estudiantes de Firebase: '+error.message);
    }
};

//Obtener estudiante por ID
exports.getEstudianteById = async (req, res) => {
    try {
        const id = req.params.id;
        const doc = await db.collection('estudiantes').doc(id).get();
        if (!doc.exists) {
            return res.status(404).send('Estudiante no encontrado');
        }
        res.status(200).json({ id: doc.id, ...doc.data() });
    }catch (error) {
        res.status(500).send('Error al obtener el estudiante de Firebase: ' + error.message);
    }
};

exports.addEstudiante = async (req, res) => {
    try {
        const nuevoEstudiante = req.body;
        const docRef = await db.collection('estudiantes').add(nuevoEstudiante);
        res.status(201).json({ id: docRef.id, ...nuevoEstudiante });
    } catch (error) {
        res.status(500).send('Error al agregar el estudiante a Firebase: ' + error.message);
    }
};

exports.updateEstudiante = async (req, res) => {

    try{
        const id = req.params.id;
        const datosActualizados = req.body;

        const docRef = db.collection('estudiantes').doc(id);
        const doc = await docRef.get();
        if (!doc.exists) {
            return res.status(404).send('Estudiante no encontrado');
        }

        // Actualiza solo los campos enviados en el body
        await docRef.update(datosActualizados);

        // Obtener documento actualizado
        const updatedDoc = await docRef.get();
        res.status(200).json({ id: updatedDoc.id, ...updatedDoc.data() });
    } catch (error) {
        res.status(500).send('Error al actualizar el estudiante en Firebase: ' + error.message);
    }
};

exports.deleteEstudiante = async (req, res) => {

    try{
        const id = req.params.id;
        const docRef = db.collection('estudiantes').doc(id);
        const doc = await docRef.get();
        if (!doc.exists) {
            return res.status(404).send('Estudiante no encontrado');
        }

        await docRef.delete();
        res.status(200).json({ message: 'Estudiante eliminado', id });
    } catch (error) {
        res.status(500).send('Error al eliminar el estudiante de Firebase: ' + error.message);
    }
};
