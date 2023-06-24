import React from 'react';
import { Header } from './Header/Header';
import { Outlet } from 'react-router-dom';

export function Layout() {
  return (
    <div>
      <Header>Header</Header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}
