import React from 'react';
import css from './Header.module.css';
import { Link } from 'react-router-dom';

export function Header() {
  return (
    <div>
      <header className={css.header}>
        <h1 className={css.logo}>Movies App</h1>
        <nav className={css.nav}>
          <ul className={css.navList}>
            <li className={css.navItem}>
              <Link to="/" className={css.navLink}>
                Home
              </Link>
            </li>
            <li className={css.navItem}>
              <Link to="/movies" className={css.navLink}>
                Movies
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}
