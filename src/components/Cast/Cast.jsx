import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCredits } from '../api/api-movies';
import css from './Cast.module.css';

const placeholderImage = 'https://via.placeholder.com/200x300?text=No+Image';

export function Cast() {
  const [actors, setActors] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    const fetchCast = async () => {
      try {
        const movieCast = await getMovieCredits(movieId);
        setActors(movieCast);
      } catch (error) {
        console.log(error);
      }
    };

    fetchCast();
  }, [movieId]);

  return (
    <div className={css.movieActors}>
      {actors && (
        <>
          <h3 className={css.actorsTitle}>Actors:</h3>
          <div className={css.actorsList}>
            {actors.cast.map(actor => (
              <div key={actor.id} className={css.actorItem}>
                <img
                  className={css.actorImage}
                  src={
                    actor.profile_path
                      ? `https://image.tmdb.org/t/p/w200${actor.profile_path}`
                      : placeholderImage
                  }
                  alt={actor.name}
                />
                <p className={css.actorName}>{actor.name}</p>
                <p className={css.actorCharacter}>{actor.character}</p>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
