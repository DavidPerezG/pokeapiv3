# Proyecto Pokedex

Este proyecto consta de un backend (construido con Node.js) y un frontend (construido con React.js) para crear una aplicación Pokedex. El backend proporciona una API para obtener datos de Pokémon, y el frontend muestra e interactúa con los datos.

## Backend (Node.js)

## Documentación de la API

Consulta la [Documentación de la API](https://documenter.getpostman.com/view/24259639/2s9YsNfWXQ) para obtener detalles sobre los endpoints disponibles y cómo utilizarlos con Postman.

### Configuración

1. Clona el repositorio:

   ```bash
   git clone https://github.com/your-username/pokedex-project.git
   ```

2. Navega al directorio `back-end`:

   ```bash
   cd pokedex-project/back-end
   ```

3. Instala las dependencias:

   ```bash
   npm install
   ```

4. Ejecuta el script de construcción para compilar el código TypeScript:

   ```bash
   npm run build
   ```

5. Inicia el servidor de desarrollo:

   ```bash
   npm run dev
   ```

   El servidor estará disponible en `http://localhost:3000`.

### Scripts

- `npm run start`: Inicia el servidor en producción.
- `npm run dev`: Inicia el servidor de desarrollo con Nodemon.
- `npm run build`: Compila el código TypeScript a JavaScript.

### Dependencias

- `axios`: Cliente HTTP basado en promesas para realizar solicitudes a la API de Pokémon.
- `cors`: Middleware para habilitar el Compartir Recursos de Origen Cruzado (CORS).
- `express`: Marco de trabajo web para construir el servidor backend.
- `pdfkit`: Biblioteca para crear archivos PDF.

### Dependencias de Desarrollo

- `@babel/core`: Funcionalidad central de Babel.
- `@babel/preset-env`: Conjunto de ajustes de Babel para compilar JavaScript.
- `@babel/register`: Registro de Babel para requerir archivos `.ts`.
- `@types/axios`: Definiciones de tipos TypeScript para Axios.
- `@types/express`: Definiciones de tipos TypeScript para Express.
- `@types/node`: Definiciones de tipos TypeScript para Node.js.
- `ts-node`: Ejecución de TypeScript y REPL para Node.js.
- `typescript`: Soporte para el lenguaje TypeScript.

### Construcción para Producción

Antes de implementar tu aplicación backend, asegúrate de ejecutar el script `npm run build` para compilar TypeScript a JavaScript. El código compilado se ubicará en el directorio `dist`.

## Frontend (React.js)

### Configuración

1. Navega al directorio `front-end`:

   ```bash
   cd pokedex-project/front-end
   ```

2. Instala las dependencias:

   ```bash
   npm install
   ```

3. Inicia el servidor de desarrollo:

   ```bash
   npm start
   ```

   La aplicación estará disponible en `http://localhost:3001`.

### Scripts

- `npm start`: Inicia el servidor de desarrollo.
- `npm run build`: Compila la aplicación lista para producción.
- `npm test`: Ejecuta pruebas.
- `npm run eject`: Desvincula de Create React App (no se recomienda a menos que sea necesario).

### Dependencias

- `react`: Biblioteca de JavaScript para construir interfaces de usuario.
- `react-dom`: Paquete React para trabajar con el DOM.
- `react-scripts`: Configuración y scripts para Create React App.
- `web-vitals`: Biblioteca para medir vitales web.

### Proxy

El frontend está configurado para redirigir las solicitudes API al servidor backend en `http://localhost:3000` durante el desarrollo.

## Notas

- Asegúrate de que tanto el backend como el frontend se estén ejecutando simultáneamente para experimentar la aplicación Pokedex completa.

¡Feliz codificación! 🚀
