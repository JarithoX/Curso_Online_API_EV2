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
