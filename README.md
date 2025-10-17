# API Plataforma de Cursos Online

API RESTful para la gestión de una plataforma de cursos online, desarrollada con Node.js, Express y Firebase.

## 📋 Entidades

- `estudiantes`: Gestión de estudiantes
- `cursos`: Administración de cursos disponibles
- `profesores`: Información de profesores
- `evaluaciones`: Control de evaluaciones
- `certificados`: Gestión de certificados
- `matriculas`: Registro de matrículas

## 🔒 Autenticación

Todas las rutas de la API (excepto /) requieren autenticación mediante header:

```http
Clave-De-Autenticacion: api_key_ev2_2023_inacap_123
```

## 🛣️ Endpoints

### Estudiantes
- `GET /estudiantes` - Obtener lista de estudiantes
- `GET /estudiantes/:id` - Obtener estudiante por ID
- `POST /estudiantes` - Crear nuevo estudiante
- `PUT /estudiantes/:id` - Actualizar estudiante
- `DELETE /estudiantes/:id` - Eliminar estudiante

### Cursos
- `GET /cursos` - Obtener lista de cursos
- `GET /cursos/:id` - Obtener curso por ID
- `POST /cursos` - Crear nuevo curso
- `PUT /cursos/:id` - Actualizar curso
- `DELETE /cursos/:id` - Eliminar curso

### Profesores
- `GET /profesores` - Obtener lista de profesores
- `GET /profesores/:id` - Obtener profesor por ID
- `POST /profesores` - Crear nuevo profesor
- `PUT /profesores/:id` - Actualizar profesor
- `DELETE /profesores/:id` - Eliminar profesor

### Evaluaciones
- `GET /evaluaciones` - Obtener lista de evaluaciones
- `GET /evaluaciones/:id` - Obtener evaluación por ID
- `POST /evaluaciones` - Crear nueva evaluación
- `PUT /evaluaciones/:id` - Actualizar evaluación
- `DELETE /evaluaciones/:id` - Eliminar evaluación

### Certificados
- `GET /certificados` - Obtener lista de certificados
- `GET /certificados/:id` - Obtener certificado por ID
- `POST /certificados` - Crear nuevo certificado
- `PUT /certificados/:id` - Actualizar certificado
- `DELETE /certificados/:id` - Eliminar certificado

### Matrículas
- `GET /matriculas` - Obtener lista de matrículas
- `GET /matriculas/:id` - Obtener matrícula por ID
- `POST /matriculas` - Crear nueva matrícula
- `PUT /matriculas/:id` - Actualizar matrícula
- `DELETE /matriculas/:id` - Eliminar matrícula

## 📝 Ejemplos de Uso

### Obtener Estudiantes
```bash
curl -X GET http://localhost:3000/estudiantes \
  -H "Clave-De-Autenticacion: api_key_ev2_2023_inacap_123"
```

### Crear Nuevo Estudiante
```bash
curl -X POST http://localhost:3000/estudiantes \
  -H "Clave-De-Autenticacion: api_key_ev2_2023_inacap_123" \
  -H "Content-Type: application/json" \
  -d '{
    "nombre": "Juan",
    "apellido": "Pérez",
    "email": "juan@ejemplo.com",
    "rut": "12345678-9",
    "telefono": "912345678"
  }'
```

## ⚙️ Configuración

1. Instalar dependencias:
```bash
npm install
```

2. Configurar variables de entorno:
```bash
# Crear archivo .env con:
AUTH_KEY=api_key_ev2_2023_inacap_123
PORT=3000
```

3. Iniciar servidor:
```bash
node app.js
```

## 🔧 Tecnologías Utilizadas

- Node.js
- Express
- Firebase/Firestore
- dotenv (variables de entorno)
- cors (middleware CORS)

## 📁 Estructura del Proyecto

```
├── app.js              # Punto de entrada
├── config/
│   ├── firebase.js    # Configuración Firebase
├── controllers/        # Controladores
├── middlewares/       # Middlewares (auth, validación)
├── routes/            # Rutas de la API
└── views/             # Vistas (index.html)
```

## 🧪 Testing con Postman

1. Importar colección de Postman (incluida en el repo)
2. Configurar variable de entorno `auth_key`
3. Ejecutar requests

## 🔐 Seguridad

- Autenticación por header requerida
- Validación de datos en requests
- Variables de entorno para configuraciones sensibles
- CORS habilitado

## 📄 Licencia

MIT
Instrucciones mínimas para ejecutar este proyecto en desarrollo.

Requisitos:
- Node.js - Comprueba con el comando [ node -v ] si lo tienes instalado, de lo contrario lo puedes instalar con el siguiente comando:
```powershell
winget install OpenJs.NodeJS.LTS
```
Instalación

1. Clona el repositorio y entra en la carpeta del proyecto.

```powershell
git clone https://github.com/JarithoX/Curso_Online_API_EV2.git
```

2. Instala las dependencias:  ejecuta `npm install` — esto descargará e instalará las dependencias declaradas en `package.json`.

```powershell
npm install
```

3. Configura las credenciales de Firebase: crea un archivo `serviceAccountKey.json` y cargar el contenido de `firebase` dentro de /config. 

3.b Uso de variables de entorno (.env) y claves (recomendado)

- Se utiliza un archivo `.env` local para variables sensibles. No subir al repositorio.
- Variables principales que puedes usar (ver `.env.example`):
	- `AUTH_KEY` : clave simulada que el middleware validará. Ejemplo: `AUTH_KEY=clave_simulada_123456`.
	- `SERVICE_ACCOUNT_BASE64`: (opcional) contenido base64 del JSON del service account. Si está presente, se usará para inicializar Firebase.
	- `PORT`: puerto de la aplicación.

- Cómo generar `SERVICE_ACCOUNT_BASE64` en PowerShell (desde la raíz del proyecto):
```powershell
[Convert]::ToBase64String([IO.File]::ReadAllBytes('.\\config\\serviceAccountKey.json')) | Out-File -Encoding ascii serviceAccountBase64.txt
```
Luego copia el contenido de `serviceAccountBase64.txt` y pégalo en tu `.env` como `SERVICE_ACCOUNT_BASE64= <contenido>`.

4. Ejecución
- Inicia la aplicación:

```powershell
node app.js
```

4.b Autenticación simulada

- completar...

5. Subir archivos a Repositorio GitHub:

- Muestra el estado para ver qué archivos están modificados (M) o no rastreados (??)
```powershell
git status --short
```

- AGREGA (Staging) los ARCHIVOS ESPECÍFICOS que deseas confirmar
- Reemplaza "archivo1.js" y "carpeta/archivo2.html" con tus archivos.
```powershell
git add archivo1.js carpeta/archivo2.html
```

- VERIFICA que solo esos archivos estén en el Staging Area (en verde)
```powershell
git status --short
```

- CONFIRMA los cambios con un mensaje claro y conciso
```powershell
git commit -m "Ej: Creación de rutas(matriculas) y modificación en 'matriculaController.js' "
```

- SINCRONIZA tu rama local con la remota (opcional, pero buena práctica)
```powershell
git fetch origin
```

- SUBE los commits a GitHub
```powershell
git push
```


Buenas prácticas

- No subas `serviceAccountKey.json` ni otras credenciales. Usa `.gitignore` para ignorarlas.
- Añade un `README.md` con más detalles si el proyecto crece (endpoints, ejemplo de requests, variables de entorno necesarias).
