import React, { version } from 'react';

import './Footer.scss';

interface Props {
  version: string;
}

export const Footer = ({ version }: Props) => {
  return (
    <footer className="Footer">
      <p>Made with Tony by Kallan</p>
      <p>Version {version}</p>
    </footer>
  );
};
