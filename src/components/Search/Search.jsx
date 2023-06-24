import React from 'react';
import { useState } from 'react';
import css from './Search.module.css';

export function Search({ onSubmit }) {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = event => {
    setSearchQuery(event.target.value.toLowerCase().trim());
  };

  const handleSearchSubmit = event => {
    event.preventDefault();
    if (searchQuery.trim() === '') {
      alert('Please, enter smth...!');
      return;
    }
    onSubmit(searchQuery);

    console.log('Search Query:', searchQuery);
    setSearchQuery('');
  };

  return (
    <div>
      <form className={css.searchForm} onSubmit={handleSearchSubmit}>
        <input
          className={css.searchInput}
          type="text"
          placeholder="Enter a movie title"
          value={searchQuery}
          onChange={handleSearchChange}
        />
        <button className={css.searchButton} type="submit">
          Search
        </button>
      </form>
    </div>
  );
}
