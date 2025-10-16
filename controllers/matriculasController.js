const db = require('../config/firebase')


//Metodo para obtener matriculas
exports. getMatriculas = async (req, res) => {
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
