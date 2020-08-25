import React from 'react';

// Import app styles into every page
import './src/styles/app.scss';

import { Layout } from './src/Layout/Layout';

// Wraps every page in a component
export const wrapPageElement = ({ element, props }) => {
  return <Layout {...props}>{element}</Layout>;
};
