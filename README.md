# Pokedex Project

This project consists of a backend (built with Node.js) and a frontend (built with React.js) for creating a Pokedex application. The backend provides an API to fetch Pokemon data, and the frontend displays and interacts with the data.

## Backend (Node.js)

### Setup

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/pokedex-project.git
   ```

2. Navigate to the `back-end` directory:

   ```bash
   cd pokedex-project/back-end
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Run the development server:

   ```bash
   npm run dev
   ```

   The server will be running on `http://localhost:3000`.

### Scripts

- `npm run start`: Start the production server.
- `npm run dev`: Start the development server using Nodemon.

### Dependencies

- `axios`: Promise-based HTTP client for making requests to the Pokemon API.
- `cors`: Middleware to enable Cross-Origin Resource Sharing (CORS).
- `express`: Web framework for building the backend server.
- `pdfkit`: Library for creating PDFs.

### Development Dependencies

- `@babel/core`: Core Babel functionality.
- `@babel/preset-env`: Babel preset for compiling JavaScript.
- `@babel/register`: Babel register for requiring `.ts` files.
- `@types/axios`: TypeScript type definitions for Axios.
- `@types/express`: TypeScript type definitions for Express.
- `@types/node`: TypeScript type definitions for Node.js.
- `ts-node`: TypeScript execution and REPL for Node.js.
- `typescript`: TypeScript language support.

## Frontend (React.js)

### Setup

1. Navigate to the `front-end` directory:

   ```bash
   cd pokedex-project/front-end
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Run the development server:

   ```bash
   npm start
   ```

   The application will be available at `http://localhost:3001`.

### Scripts

- `npm start`: Start the development server.
- `npm run build`: Build the production-ready application.
- `npm test`: Run tests.
- `npm run eject`: Eject from Create React App (not recommended unless necessary).

### Dependencies

- `react`: JavaScript library for building user interfaces.
- `react-dom`: React package for working with the DOM.
- `react-scripts`: Configuration and scripts for Create React App.
- `web-vitals`: Library for measuring web vitals.

### Proxy

The frontend is configured to proxy API requests to the backend server at `http://localhost:3000` during development.

## Notes

- Make sure both the backend and frontend are running concurrently to experience the full Pokedex application.

Happy coding! 🚀
