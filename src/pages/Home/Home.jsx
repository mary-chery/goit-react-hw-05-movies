import React from 'react';
import { useGetTrendingMovies } from '../../hooks/useGetTrendingMovies';
import { MovieList } from '../../components/MovieList/MovieList';

export function Home() {
  const { movies, error, loading } = useGetTrendingMovies();
  console.log(movies, error, loading);

  if (loading) return <div>loading...</div>;
  if (error) return <div>Somthing went wrong...</div>;

  return (
    <div>
      <h2>Trending Movies</h2>
      <MovieList movies={movies} />
    </div>
  );
}
