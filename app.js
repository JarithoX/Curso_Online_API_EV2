const express = require("express");
const cors = require("cors");
const os = require("os");
const path = require("path"); //Para la vista principal

const estudiantesRouter = require("./routes/estudiantesRoute");   
const cursosRouter = require("./routes/cursosRoute"); 
const matriculasRouter = require("./routes/matriculasRoute");     

const app = express();
app.use(cors());
app.use(express.json());

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

// ✅ Montar routers para estudiantes, cursos y matrículas
app.use("/estudiantes", estudiantesRouter);
app.use("/cursos", cursosRouter);
app.use("/matriculas", matriculasRouter);

app.listen(PORT, "0.0.0.0", () => {
    const localIP = getLocalIP();
    console.log("============= APIS URLS =============");
    console.log(`Servidor corriendo en:`);
    console.log(`➡ Local:   http://localhost:${PORT}`);
    console.log(`➡ Red:     http://${localIP}:${PORT}`);
    console.log("=====================================");
});