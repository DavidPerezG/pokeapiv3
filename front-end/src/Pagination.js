
import React from 'react';

const Pagination = ({ onPageChange, currentPage, totalPages }) => {
  const styles = {
    container: {
      display: 'flex',
      justifyContent: 'center',
      marginTop: '20px',
    },
    button: {
      backgroundColor: '#3498db',
      color: '#fff',
      border: 'none',
      padding: '10px 15px',
      margin: '0 5px',
      cursor: 'pointer',
      borderRadius: '5px',
      transition: 'background-color 0.3s ease-in-out',
    },
    buttonHover: {
      backgroundColor: '#2980b9',
    },
    activeButton: {
      backgroundColor: '#2980b9',
    },
  };

  const maxVisiblePages = 10;
  let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
  let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);

  if (totalPages <= maxVisiblePages) {
    startPage = 1;
    endPage = totalPages;
  } else {
    if (currentPage <= Math.ceil(maxVisiblePages / 2)) {
      endPage = maxVisiblePages;
    } else if (currentPage >= totalPages - Math.floor(maxVisiblePages / 2)) {
      startPage = totalPages - maxVisiblePages + 1;
    }
  }

  const pages = Array.from({ length: endPage - startPage + 1 }, (_, index) => startPage + index);

  return (
    <div style={styles.container}>
      {currentPage > 1 && (
        <button style={styles.button} onClick={() => onPageChange(currentPage - 1)}>
          &laquo;
        </button>
      )}

      {pages.map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          style={{
            ...styles.button,
            ...(currentPage === page && styles.activeButton),
            ...(styles.buttonHover && { ':hover': styles.buttonHover }),
          }}
        >
          {page}
        </button>
      ))}

      {currentPage < totalPages && (
        <button style={styles.button} onClick={() => onPageChange(currentPage + 1)}>
          &raquo;
        </button>
      )}
    </div>
  );
};

export default Pagination;
