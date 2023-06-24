import { useEffect, useState } from 'react';
import { getTrendingMovies } from '../components/api/api-movies';

export const useGetTrendingMovies = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const getMovies = async () => {
      try {
        const response = await getTrendingMovies();
        setMovies(response);
      } catch {
        console.error(error);
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    getMovies();
  }, [error]);

  return { movies, error, loading };
};
