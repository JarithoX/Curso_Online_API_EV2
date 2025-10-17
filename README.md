# API Curso Online (EV2)
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
