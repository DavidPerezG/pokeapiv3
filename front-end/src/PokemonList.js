import React, { useState } from 'react';
import pdfIcon from './download-pdf.png';

const PokemonList = ({ pokemons }) => {
  const [loading, setLoading] = useState(false);

  const downloadPDF = async (url) => {
    setLoading(true);

    try {
      const response = await fetch('http://localhost:3000/api/generarpdf', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ url }),
      });

      if (!response.ok) {
        console.error('Error generating PDF');

        return;
      }

      const blob = await response.blob();
      const link = document.createElement('a');
      link.href = window.URL.createObjectURL(new Blob([blob]));
      link.setAttribute('download', 'pokemon.pdf');
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error('Error:', error);

    } finally {
      setLoading(false);
    }
  };


  const styles = {
    container: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
      maxWidth: '800px',
      margin: '0 auto',
    },
    item: {
      width: 'calc(50% - 10px)',
      marginBottom: '10px',
      backgroundColor: '#f7f7f7',
      borderRadius: '8px',
      boxShadow: '0 0 5px rgba(0, 0, 0, 0.1)',
      transition: 'transform 0.3s ease-in-out',
      display: 'flex',
      flexDirection: 'row',
    },
    itemHover: {
      transform: 'scale(1.05)',
    },
    link: {
      display: 'block',
      padding: '10px',
      textDecoration: 'none',
      color: '#333',
      fontWeight: 'bold',
      flex: '1',
    },
    linkHover: {
      color: '#e44d26',
    },
    button: {
      padding: '10px',
      backgroundColor: 'red',
      color: '#fff',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
    },
    pdfIcon: {
      width: '20px',
      height: '20px',
      marginRight: '0px',
      display: "flex",
      justifyContent: 'center',
      alignItems: 'center',
    },
  };

  return (
    <div style={styles.container}>
      {pokemons.map((pokemon) => (
        <div key={pokemon.name} style={{ ...styles.item, ...(styles.itemHover && { ':hover': styles.itemHover }) }}>
          <a
            href={pokemon.url}
            target="_blank"
            rel="noopener noreferrer"
            style={{ ...styles.link, ...(styles.linkHover && { ':hover': styles.linkHover }) }}
          >
            {pokemon.name}
          </a>
          <button
            style={styles.button}
            onClick={() => downloadPDF(pokemon.url)}
            disabled={loading}
          >
            <img src={pdfIcon} alt="PDF Icon" style={styles.pdfIcon} />
          </button>
        </div>
      ))}
    </div>
  );
};


export default PokemonList;
