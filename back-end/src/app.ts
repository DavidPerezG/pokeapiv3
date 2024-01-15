const express = require('express');
const cors = require('cors');
const pokemonRoutes = require('./routes/pokemonRoutes');
const pokemonService = require('./services/pokemonService');
const PDFDocument = require('pdfkit');

const app = express();
const PORT = 3000;

type Pokemon = {
  name: string;
  url: string;
};

let allPokemons: Pokemon[] = [];

(async () => {
  try {
    // Wait for the Pokémon data to be fetched
    allPokemons = await pokemonService.getEveryPokemon();
    allPokemons.sort((a, b) => a.name.localeCompare(b.name));
    console.log('Fetched all Pokémon data.');

    app.use(express.json());
    // Enable CORS for all routes
    app.use(cors({ origin: 'http://localhost:3001' }))

    // Pass allPokemons to the pokemonRoutes functionapp.use(express.json());
    app.use('/api', pokemonRoutes(allPokemons));

    // Start the server after setting up the routes
    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  } catch (error: any) {
    console.error('Error fetching Pokémon data:', error.message);
  }
})();

