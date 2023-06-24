import axios from 'axios';

const API_KEY = '2ff9a25f6b0d642d0cbe448a4c742d55';
axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
axios.defaults.params = {
  api_key: API_KEY,
};

export const getTrendingMovies = async () => {
  const { data } = await axios.get('/trending/movie/day');
  return data.results;
};

export const searchMovies = async query => {
  const { data } = await axios.get(`/search/movie?query=${query}`);
  return data.results;
};

export const getMovieDetails = async movie_id => {
  const { data } = await axios.get(`/movie/${movie_id}`);
  return data;
};

export const getMovieCredits = async movie_id => {
  const { data } = await axios.get(`/movie/${movie_id}/credits`);
  return data;
};

export const getMovieReviews = async movie_id => {
  const { data } = await axios.get(`/movie/${movie_id}/reviews`);
  return data;
};
