
const pokemonController = require('../controllers/pokemonController');
const { Router } = require('express');
const router = Router();

module.exports = (allPokemons: any[]) => {
  router.get('/pokemons/', (req: any, res: any) => pokemonController.getAllPokemons(req, res, allPokemons));
  router.get('/pokemons/:pokemonId', pokemonController.getPokemonDetails);
router.post('/generarpdf', async (req: any, res: any) => {
  const { url } = req.body as { url?: string };

  if (!url) {
    return res.status(400).json({ error: 'Missing URL in the request body' });
  }

  pokemonController.generatePokemonPDF(url, res);
});
  return router;
};

