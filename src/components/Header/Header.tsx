import React from "react";
// import classNames from 'classnames';

import "./Header.scss";

import { Link } from "gatsby";

const PAGES = [
  {
    to: "/",
    label: "Home",
  },
  {
    to: "/checkout",
    label: "Checkout",
  },
];

export const Header = () => {
  return (
    <div className="Header">
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
    </div>
  );
};
