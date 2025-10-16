const db = require('../config/firebase')

//Metodo para obtener los cursos
exports.getCursos = async (req, res) => {
    try{
        const datos = await db.collection('cursos').get()
        const cursos = []

        datos.forEach(doc => {
            cursos.push({id: doc.id, ...doc.data()})
        });
        res.status(200).json(cursos)
        console.log(cursos)
    } catch (error) {
        res.status(500).send('Error al obtener los cursos de Firebase: '+error.message);
    }
};

// Obtener curso por ID
exports.getCursoById = async (req, res) => {
    try {
        const id = req.params.id;
        const doc = await db.collection('cursos').doc(id).get();
        if (!doc.exists) {
            return res.status(404).send('Curso no encontrado');
        }
        res.status(200).json({ id: doc.id, ...doc.data() });
    } catch (error) {
        res.status(500).send('Error al obtener el curso de Firebase: ' + error.message);
    }
};

// Agregar nuevo curso
exports.addCurso = async (req, res) => {
    try {
        const nuevoCurso = req.body;
        const docRef = await db.collection('cursos').add(nuevoCurso);
        res.status(201).json({ id: docRef.id, ...nuevoCurso });
    } catch (error) {
        res.status(500).send('Error al agregar el curso a Firebase: ' + error.message);
    }
};

// Actualizar curso
exports.updateCurso = async (req, res) => {
    try {
        const id = req.params.id;
        const datosActualizados = req.body;

        const docRef = db.collection('cursos').doc(id);
        const doc = await docRef.get();
        if (!doc.exists) {
            return res.status(404).send('Curso no encontrado');
        }

        await docRef.update(datosActualizados);
        const updatedDoc = await docRef.get();
        res.status(200).json({ id: updatedDoc.id, ...updatedDoc.data() });
    } catch (error) {
        res.status(500).send('Error al actualizar el curso en Firebase: ' + error.message);
    }
};

// Eliminar curso
exports.deleteCurso = async (req, res) => {
    try {
        const id = req.params.id;
        const docRef = db.collection('cursos').doc(id);
        const doc = await docRef.get();
        if (!doc.exists) {
            return res.status(404).send('Curso no encontrado');
        }

        await docRef.delete();
        res.status(200).json({ message: 'Curso eliminado', id });
    } catch (error) {
        res.status(500).send('Error al eliminar el curso de Firebase: ' + error.message);
    }
};
