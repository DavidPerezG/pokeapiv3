
const pokemonService = require('../services/pokemonService');
import { Request, Response } from 'express';
const pdfkit = require('pdfkit');
const axios = require('axios');




async function getAllPokemons(req: Request, res: Response, allPokemons: Pokemon[]) {
  try {
    const limit = parseInt(req.query.limit as string, 10) || 0; // Convert to number or use default value
    const page = parseInt(req.query.page as string, 10) || 0;
    const search = req.query.q as string || '';
    const pokemons = await pokemonService.getAllPokemonsService(limit, page, search, allPokemons);
    res.json(pokemons);
  } catch (error: any) {
    res.status(500).json({ error: error.message, });
  }
}

async function getPokemonDetails(req: Request, res: Response) {
  try {
    const { pokemonId } = req.params;
    const details = await pokemonService.getPokemonDetailsService(pokemonId);
    res.json(details);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
}


async function generatePokemonPDF(url: string, res: Response) {
  try {
    const pokemonData = await pokemonService.getPokemonDataByUrl(url);

    const pdf = new pdfkit();

    // Add Pokémon image to the PDF
    if (pokemonData.sprites && pokemonData.sprites.front_default) {
      const imageBuffer = await axios.get(pokemonData.sprites.front_default, { responseType: 'arraybuffer' });
      const imageData = Buffer.from(imageBuffer.data, 'binary');
      pdf.image(imageData, { width: 100, height: 100 });
    }

    // Add Pokémon details to the PDF in a structured format
    pdf.font('Helvetica-Bold').fontSize(18).text(`Pokémon Details: ${pokemonData.name}`, { align: 'center' });

    pdf.moveDown(0.5); // Add some vertical spacing

    pdf.font('Helvetica').fontSize(12).text(`ID: ${pokemonData.id}`);
    pdf.text(`Altura: ${pokemonData.height}`);
    pdf.text(`Peso: ${pokemonData.weight}`);

    pdf.moveDown(0.5); // Add some vertical spacing

    // Add types
    pdf.font('Helvetica-Bold').text('Tipos:');
    pdf.font('Helvetica').text(pokemonData.types.map((type:any) => `  - ${type.type.name}`).join('\n'));

    pdf.moveDown(0.5); // Add some vertical spacing

    // Add abilities
    pdf.font('Helvetica-Bold').text('Habilidades:');
    pdf.font('Helvetica').text(pokemonData.abilities.map((ability:any) => `  - ${ability.ability.name}`).join('\n'));

    // Set headers for the response
    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', 'attachment; filename=pokemon.pdf');

    // Pipe the PDF to the response stream
    pdf.pipe(res);
    pdf.end();
  } catch (error) {
    console.error(error);
    res.status(500).send('Error al procesar la solicitud');
  }
}

module.exports = {  getAllPokemons, getPokemonDetails, generatePokemonPDF };

