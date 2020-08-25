import React from 'react';
import { Link } from 'gatsby';
// import classNames from 'classnames';

import './Header.scss';

import hipster from 'assets/icons/hipster.svg';

const PAGES = [
  {
    to: '/',
    label: 'Home',
  },
  {
    to: '/checkout',
    label: 'Checkout',
  },
];

export const Header = () => {
  return (
    <header className="Header">
      <div className="Header-logo">
        <Link to="/" title="Home">
          <img className="Header-logo-image" src={hipster} alt="" />
        </Link>
      </div>

      <nav className="Header-nav">
        {PAGES.map(({ to, label }) => (
          <Link
            key={label}
            className="Header-link"
            activeClassName="isActive"
            to={to}
            title={label}
          >
            {label}
          </Link>
        ))}
      </nav>
    </header>
  );
};
