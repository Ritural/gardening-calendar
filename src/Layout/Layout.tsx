import React from 'react';

import { Header } from 'components/Header/Header';
import { Footer } from 'components/Footer/Footer';

import './Layout.scss';

interface Props {
  children: React.ReactChildren;
}

export const Layout = ({ children }: Props) => {
  return (
    <main className="Layout">
      <Header />

      {children}

      <Footer />
    </main>
  );
};
