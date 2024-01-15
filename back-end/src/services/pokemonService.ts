
const axios = require('axios');

interface PaginatedPokemonResponse {
  count: number;
  results: Pokemon[];
}

async function getAllPokemonsService(
  limit: number,
  page: number,
  search: string,
  allPokemons: Pokemon[]
): Promise<PaginatedPokemonResponse> {
  try {
    // Si ninguno de los parámetros se proporciona, devuelve la lista completa en orden alfabético
    if (limit === 0 && page === 0 && !search) {
      return {
        count: allPokemons.length,
        results: allPokemons,
      };
    }

    if (limit === 0) {
      limit = 10;
    }
    if (page === 0) {
      page = 1;
    }

    // Filtrar según el parámetro de búsqueda
    if (search) {
      const searchLowerCase = search.toLowerCase();
      allPokemons = allPokemons.filter((pokemon) =>
        pokemon.name.toLowerCase().includes(searchLowerCase)
      );
    }

    // Aplicar lógica de paginación
    const startIdx = (page - 1) * limit;
    const endIdx = startIdx + limit;
    const paginatedPokemons = allPokemons.slice(startIdx, endIdx);

    // Construir y devolver el objeto de respuesta paginada
    const response: PaginatedPokemonResponse = {
      count: allPokemons.length,
      results: paginatedPokemons,
    };

    return response;
  } catch (error: any) {
    console.error('Error:', error.message);
    throw new Error('Error al obtener la lista de Pokémon');
  }
}


async function getEveryPokemon() {
  try {
    let url = 'https://pokeapi.co/api/v2/pokemon?limit=2000';

    const response = await axios.get(url);
    const results = response.data.results.map((pokemon: any) => {
      return {
        name: pokemon.name,
        url: pokemon.url,
      };
    });

    return results.sort((a:any, b:any) => a.name.localeCompare(b.name)); // Ordenar alfabéticamente por nombre
  } catch (error: any) {
    console.error('Error:', error.message);
    throw new Error('Failed to fetch Pokemon list');
  }
}


async function getPokemonDetailsService(pokemonId: string) {
  try {
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`);
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch Pokemon details');
  }
}

async function getPokemonDataByUrl(url: string) {
  const response = await axios.get(url);
  return response.data;
}


module.exports = {  getAllPokemonsService, getPokemonDetailsService, getEveryPokemon, getPokemonDataByUrl };
