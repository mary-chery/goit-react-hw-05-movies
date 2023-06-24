import React from 'react';
import css from './Header.module.css';

export function Header() {
  return (
    <div>
      <header className={css.header}>
        <h1 className={css.logo}>Movies App</h1>
        <nav className={css.nav}>
          <ul className={css.navList}>
            <li className={css.navItem}>
              <a href="/" className={css.navLink}>
                Home
              </a>
            </li>
            <li className={css.navItem}>
              <a href="/movies" className={css.navLink}>
                Movies
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}
