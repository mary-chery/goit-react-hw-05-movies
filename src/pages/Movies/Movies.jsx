import React, { useEffect } from 'react';
import { useState } from 'react';
import { useSearchParams, useLocation } from 'react-router-dom';
import { searchMovies } from '../../components/api/api-movies';
import { Search } from 'components/Search/Search';
import { MovieList } from 'components/MovieList/MovieList';

export function Movies() {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get('query') ?? '';
  const location = useLocation();
  console.log(location);

  useEffect(() => {
    if (!searchQuery) return;
    const getMovies = async () => {
      try {
        const response = await searchMovies(searchQuery);
        setMovies(response);
      } catch (error) {
        console.log(error);
      }
    };

    getMovies();
  }, [searchQuery]);

  const handleFormSubmit = query => {
    setSearchParams({ query });
  };

  return (
    <div>
      <h2>Search Movies</h2>
      <Search onSubmit={handleFormSubmit} />
      <MovieList movies={movies} location={{ from: location }} />
    </div>
  );
}
