/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */
const path = require('path');
const { version } = require('./package.json');

module.exports = {
  siteMetadata: {
    title: 'Sales Playground',
    description:
      'A boilerplate to start a Gatsby, React, SCSS, and Typescript project.',
    author: '',
    siteUrl: 'https://@TODO',
    version,
  },
  plugins: [
    'gatsby-alias-imports',
    {
      resolve: 'gatsby-plugin-react-helmet',
    },
    {
      resolve: 'gatsby-plugin-sass',
      options: {
        implementation: require('sass'),
        useResolveUrlLoader: true,
      },
    },
    {
      resolve: 'gatsby-plugin-root-import',
      options: {
        '@app': path.join(__dirname, 'src/'),
        public: path.join(__dirname, 'public/'),
        pages: path.join(__dirname, 'src/pages'),
        components: path.join(__dirname, 'src/components'),
        assets: path.join(__dirname, 'src/assets'),
      },
    },
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        // replace "UA-XXXXXXXXX-X" with your own Tracking ID
        trackingId: 'UA-XXXXXXXXX-X',
      },
    },
  ],
};
