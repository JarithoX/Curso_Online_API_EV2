const db = require('../config/firebase')


//Metodo para obtener certificados
exports.getCertificados = async (req, res) => {
    try{
        const datos = await db.collection('certificados').get()
        const certificados = datos.docs.map(doc => ({id: doc.id, ...doc.data()}) );

        res.status(200).json(certificados)
        console.log(certificados)
    } catch (error) {
        res.status(500).send('Error al obtener certificados de Firebase: '+error.message);
    }
};

//Obtener certificado por ID
exports.getCertificadoById = async (req, res) => {
    try {
        const id = req.params.id;
        const doc = await db.collection('certificados').doc(id).get();
        if (!doc.exists) {
            return res.status(404).send('Certificado no encontrado');
        }
        res.status(200).json({ id: doc.id, ...doc.data() });
    }catch (error) {
        res.status(500).send('Error al obtener el certificado de Firebase: ' + error.message);
    }
};

exports.addCertificado = async (req, res) => {
    try {
        const nuevoCertificado = req.body;
        const docRef = await db.collection('certificados').add(nuevoCertificado);
        res.status(201).json({ id: docRef.id, ...nuevoCertificado });
    } catch (error) {
        res.status(500).send('Error al agregar el certificado a Firebase: ' + error.message);
    }
};

exports.updateCertificado = async (req, res) => {
    try{

    } catch (error) {

    }
};

exports.deleteCertificado = async (req, res) => {
    try{

    } catch (error) {

    }
};
