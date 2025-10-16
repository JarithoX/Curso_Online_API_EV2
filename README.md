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

4. Ejecución
- Inicia la aplicación:

```powershell
node app.js
```

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
