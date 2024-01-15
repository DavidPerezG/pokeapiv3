// SearchBar.js
import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const styles = {
    container: {
      display: 'flex',
      justifyContent: 'center',
      marginBottom: '10px',
      padding: '0 5px',
    },
    input: {
      flex: 1,
      padding: '5px',
      fontSize: '12px',
      border: '1px solid #ccc',
      borderRadius: '3px 0 0 3px',
      width: '150px',  // Ajustado el ancho
    },
    button: {
      backgroundColor: '#3498db',
      color: '#fff',
      border: 'none',
      padding: '5px 8px',
      cursor: 'pointer',
      borderRadius: '0 3px 3px 0',
      transition: 'background-color 0.3s ease-in-out',
    },
    buttonHover: {
      backgroundColor: '#2980b9',
    },
  };

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  const handleSearch = () => {
    onSearch(searchTerm);
  };

  return (
    <div style={styles.container}>
      <input
        type="text"
        value={searchTerm}
        onKeyDown={handleKeyDown}
        onChange={handleInputChange}
        placeholder="Search Pokemon..."
        style={styles.input}
      />
      <button

        onClick={handleSearch}
        style={{ ...styles.button, ...(styles.buttonHover && { ':hover': styles.buttonHover }) }}
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;
