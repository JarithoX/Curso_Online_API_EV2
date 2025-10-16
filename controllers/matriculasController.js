const db = require('../config/firebase')


//Metodo para obtener matriculas
exports.getMatriculas = async (req, res) => {
    try{
        const datos = await db.collection('matriculas').get()
        const matriculas = []

        datos.forEach(doc => {
            matriculas.push({id: doc.id, ...doc.data()})
        });
        res.status(200).json(matriculas)
        console.log(matriculas)
    } catch (error) {
        res.status(500).send('Error al obtener las matriculas de Firebase: '+error.message);
    }
};

// Obtener matricula por ID
exports.getMatriculaById = async (req, res) => {
    try {
        const id = req.params.id;
        const doc = await db.collection('matriculas').doc(id).get();
        if (!doc.exists) {
            return res.status(404).send('Matricula no encontrada');
        }
        res.status(200).json({ id: doc.id, ...doc.data() });
    } catch (error) {
        res.status(500).send('Error al obtener la matricula de Firebase: ' + error.message);
    }
};

// Agregar nueva matricula
exports.addMatricula = async (req, res) => {
    try {
        const nuevaMatricula = req.body;
        const docRef = await db.collection('matriculas').add(nuevaMatricula);
        res.status(201).json({ id: docRef.id, ...nuevaMatricula });
    } catch (error) {
        res.status(500).send('Error al agregar la matricula a Firebase: ' + error.message);
    }
};

// Actualizar matricula (PUT) - reemplazo parcial/total: aquí usamos set con merge=false para simular reemplazo completo
exports.updateMatricula = async (req, res) => {
    try {
        const id = req.params.id;
        const datosNuevos = req.body;

        const docRef = db.collection('matriculas').doc(id);
        const doc = await docRef.get();
        if (!doc.exists) {
            return res.status(404).send('Matricula no encontrada');
        }

        // Reemplazar documento (sin merge) para simular PUT
        await docRef.set(datosNuevos, { merge: false });
        const updatedDoc = await docRef.get();
        res.status(200).json({ id: updatedDoc.id, ...updatedDoc.data() });
    } catch (error) {
        res.status(500).send('Error al actualizar la matricula en Firebase: ' + error.message);
    }
};

// Actualizar matricula parcialmente (PATCH) - usa update para actualizar sólo los campos enviados
exports.patchMatricula = async (req, res) => {
    try {
        const id = req.params.id;
        const cambios = req.body;

        const docRef = db.collection('matriculas').doc(id);
        const doc = await docRef.get();
        if (!doc.exists) {
            return res.status(404).send('Matricula no encontrada');
        }

        await docRef.update(cambios);
        const updatedDoc = await docRef.get();
        res.status(200).json({ id: updatedDoc.id, ...updatedDoc.data() });
    } catch (error) {
        res.status(500).send('Error al aplicar patch a la matricula en Firebase: ' + error.message);
    }
};

// Eliminar matricula
exports.deleteMatricula = async (req, res) => {
    try {
        const id = req.params.id;
        const docRef = db.collection('matriculas').doc(id);
        const doc = await docRef.get();
        if (!doc.exists) {
            return res.status(404).send('Matricula no encontrada');
        }

        await docRef.delete();
        res.status(200).json({ message: 'Matricula eliminada', id });
    } catch (error) {
        res.status(500).send('Error al eliminar la matricula de Firebase: ' + error.message);
    }
};
