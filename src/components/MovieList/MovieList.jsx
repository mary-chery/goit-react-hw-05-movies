import { Link } from 'react-router-dom';
import css from './MovieList.module.css';
import { poster } from '../utils/poster';

const placeholderImage = 'https://via.placeholder.com/200x300?text=No+Image';

export function MovieList({ movies }) {
  return (
    <div className={css.movieGrid}>
      {movies.map(movie => (
        <div key={movie.id} className={css.movieCard}>
          <Link to={`/movies/${movie.id}`}>
            <img
              src={
                movie.poster_path ? poster(movie.poster_path) : placeholderImage
              }
              alt={movie.title}
            />
            <h3>{movie.title}</h3>
          </Link>
        </div>
      ))}
    </div>
  );
}
