const db = require('../config/firebase')


//Metodo para obtener evaluaciones
exports.getEvaluaciones = async (req, res) => {
    try{
        const datos = await db.collection('evaluaciones').get()
        const evaluaciones = datos.docs.map(doc => ({id: doc.id, ...doc.data()}) );

        res.status(200).json(evaluaciones)
        console.log(evaluaciones)
    } catch (error) {
        res.status(500).send('Error al obtener evaluaciones de Firebase: '+error.message);
    }
};

//Obtener evaluacion por ID
exports.getEvaluacionById = async (req, res) => {
    try {
        const id = req.params.id;
        const doc = await db.collection('evaluaciones').doc(id).get();
        if (!doc.exists) {
            return res.status(404).send('Evaluación no encontrada');
        }
        res.status(200).json({ id: doc.id, ...doc.data() });
    }catch (error) {
        res.status(500).send('Error al obtener la evaluación de Firebase: ' + error.message);
    }
};

exports.addEvaluacion = async (req, res) => {
    try {
        const nuevaEvaluacion = req.body;
        const docRef = await db.collection('evaluaciones').add(nuevaEvaluacion);
        res.status(201).json({ id: docRef.id, ...nuevaEvaluacion });
    } catch (error) {
        res.status(500).send('Error al agregar la evaluación a Firebase: ' + error.message);
    }
};

exports.updateEvaluacion = async (req, res) => {
    try{

    } catch (error) {

    }
};

exports.deleteEvaluacion = async (req, res) => {
    try{

    } catch (error) {

    }
};
