import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getMovieDetails } from '../../components/api/api-movies';
import { poster } from '../../components/utils/poster';
import css from './MovieDetails.module.css';
import { Cast } from 'components/Cast/Cast';
import { Reviews } from 'components/Reviews/Reviews';

export function MovieDetails() {
  const [movie, setMovie] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const movieDetails = await getMovieDetails(movieId);
        setMovie(movieDetails);
      } catch (error) {
        console.log(error);
      }
    };

    fetchMovieDetails();
  }, [movieId]);

  return (
    <div className={css.movieDetails}>
      {movie && (
        <>
          <img
            className={css.moviePoster}
            src={poster(movie.poster_path)}
            alt={movie.title}
          />
          <div className={css.movieInfo}>
            <h2 className={css.movieTitle}>{movie.title}</h2>
            <p className={css.movieOverview}>{movie.overview}</p>
            <p className={css.movieRelease}>
              Release Date: {movie.release_date}
            </p>
            <p className={css.movieRating}>
              Vote Average: {movie.vote_average}
            </p>
            <div className={css.movieGenres}>
              <p className={css.movieGenresLabel}>Genre:</p>
              <div className={css.movieGenresList}>
                {movie.genres.map(genre => (
                  <span key={genre.id} className={css.movieGenresItem}>
                    {genre.name}
                  </span>
                ))}
              </div>
            </div>
            <ul className={css.additionalInfoList}>
              <li className={css.additionalItem}>
                <Link className={css.additionalItemLink} to="cast">
                  CAST
                  <Cast />
                </Link>
              </li>
              <li className={css.additionalItem}>
                <Link className={css.additionalItemLink} to="reviews">
                  Reviews
                  <Reviews />
                </Link>
              </li>
            </ul>
          </div>
        </>
      )}
    </div>
  );
}
