import React, { useState, useEffect } from 'react';
import PokemonList from './PokemonList';
import Pagination from './Pagination';
import SearchBar from './SearchBar';

const App = () => {
  const [pokemons, setPokemons] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');

  const fetchPokemons = async (page, query) => {
    const response = await fetch(`http://localhost:3000/api/pokemons?q=${query}&page=${page}&limit=20`);
    const data = await response.json();
    setPokemons(data.results); // Actualizado para manejar la nueva estructura de datos
    setTotalPages(Math.ceil(data.count / 20)); // Actualizado para manejar la nueva estructura de datos
  };

  useEffect(() => {
    fetchPokemons(currentPage, searchTerm);
  }, [currentPage, searchTerm]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleSearch = (query) => {
    setSearchTerm(query);
    setCurrentPage(1);
  };

  return (
    <div>
      <h1>Pokémon Search</h1>
      <SearchBar onSearch={handleSearch} />
      <PokemonList pokemons={pokemons} />
      <Pagination onPageChange={handlePageChange} currentPage={currentPage} totalPages={totalPages} />
    </div>
  );
};

export default App;
