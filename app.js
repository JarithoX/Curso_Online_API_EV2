const express = require("express");
const cors = require("cors");
const os = require("os");
const path = require("path"); //Para la vista principal

// Cargar variables de entorno
try { require('dotenv').config(); } catch (e) {}

const estudiantesRouter = require("./routes/estudiantesRoute");   
const cursosRouter = require("./routes/cursosRoute"); 
const matriculasRouter = require("./routes/matriculasRoute");    
const profesoresRouter = require("./routes/profesoresRoute");
const evaluacionesRouter = require("./routes/evaluacionesRoute");
const certificadosRouter = require("./routes/certificadosRoute");    
const auth = require('./middlewares/authMiddleware');

const logger = require('./middlewares/logger');

const app = express();
// CORS configurado desde .env (CORS_ORIGIN)
const corsOrigin = process.env.CORS_ORIGIN || '*';
app.use(cors({ origin: corsOrigin }));
app.use(express.json());
app.use(logger);
// Servir archivos estáticos (views) para que el cliente pueda cargar assets o scripts
app.use(express.static(path.join(__dirname, 'views')));

const PORT = process.env.PORT || 3000;

// función para obtener la IP local
function getLocalIP() {
    const interfaces = os.networkInterfaces();
    for (let iface in interfaces) {
        for (let alias of interfaces[iface]) {
            if (alias.family === "IPv4" && !alias.internal) {
                return alias.address;
            }
        }
    }
    return "127.0.0.1"; // fallback
}

// Ruta raíz de bienvenida (envía el archivo estático creado en views/index.html)
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

// Rutas públicas para la página: no requieren la clave de autenticación
const publicRoute = require('./routes/publicRoute');
app.use('/datos', publicRoute);

// ✅ Montar routers para estudiantes, cursos y matrículas
// Proteger rutas de la API con la clave (excepto la raíz '/').
app.use('/estudiantes', auth, estudiantesRouter);
app.use('/cursos', auth, cursosRouter);
app.use('/matriculas', auth, matriculasRouter);
app.use('/profesores', auth, profesoresRouter);
app.use('/evaluaciones', auth, evaluacionesRouter);
app.use('/certificados', auth, certificadosRouter);

// 404 handler
app.use((req, res, next) => {
    res.status(404).json({ error: 'Ruta no encontrada' });
});

// Global error handler
app.use((err, req, res, next) => {
    console.error('Unhandled error:', err);
    res.status(500).json({ error: 'Internal Server Error' });
});

app.listen(PORT, "0.0.0.0", () => {
    const localIP = getLocalIP();
    console.log("============= APIS URLS =============");
    console.log(`Servidor corriendo en:`);
    console.log(`➡ Local:   http://localhost:${PORT}`);
    console.log(`➡ Red:     http://${localIP}:${PORT}`);
    console.log("=====================================");
});