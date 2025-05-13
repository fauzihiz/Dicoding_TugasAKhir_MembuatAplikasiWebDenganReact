// src/components/Search.jsx
import React from 'react';

const Search = ({ onSearch }) => {
  return (
    <input
      type="text"
      placeholder="Cari catatan..."
      onChange={(e) => onSearch(e.target.value)}
    />
  );
};

export default Search;