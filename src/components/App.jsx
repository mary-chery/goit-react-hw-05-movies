import { Route, Routes } from 'react-router-dom';
// import { lazy } from 'react';

import { Home } from '../pages/Home/Home';

import { Layout } from './Layout/Layout';
import { Movies } from 'pages/Movies/Movies';
import { MovieDetails } from 'pages/MovieDetails/MovieDetails';
import { Cast } from '../components/Cast/Cast';
import { Reviews } from '../components/Reviews/Reviews';

// const Home = lazy(() => import('../pages/Home/Home'));
// const Movies = lazy(() => import('../pages/Movies/Movies'));
// const MovieDetails = lazy(() => import('../pages/MovieDetails/MovieDetails'));
// const Layout = lazy(() => import('../components/Layout/Layout'));
// const Cast = lazy(() => import('../components/Cast/Cast'));
// const Reviews = lazy(() => import('../components/Reviews/Reviews'));

export function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
  );
}
