import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from '../api/api-movies';
import css from './Reviews.module.css';

export function Reviews() {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const movieReviews = await getMovieReviews(movieId);
        console.log(movieReviews);
        setReviews(movieReviews.results);
      } catch (error) {
        console.log(error);
      }
    };

    fetchReviews();
  }, [movieId]);

  return (
    <div className={css.movieReviews}>
      {reviews &&
        reviews.map(review => (
          <div key={review.id} className={css.reviewItem}>
            <h3 className={css.author}>{review.author}</h3>
            <p className={css.content}>{review.content}</p>
          </div>
        ))}
    </div>
  );
}
