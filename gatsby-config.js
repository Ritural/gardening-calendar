/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */
const path = require("path");
const appVersion = require("./package.json").version;

module.exports = {
  siteMetadata: {
    // title,
    // description: "",
    // author: "",
    appVersion,
  },
  plugins: [
    "gatsby-alias-imports",
    {
      resolve: "gatsby-plugin-react-helmet",
    },
    {
      resolve: "gatsby-plugin-sass",
      options: {
        implementation: require("sass"),
        useResolveUrlLoader: true,
      },
    },
    {
      resolve: "gatsby-plugin-root-import",
      options: {
        "@app": path.join(__dirname, "src/"),
        public: path.join(__dirname, "public/"),
        pages: path.join(__dirname, "src/pages"),
        components: path.join(__dirname, "src/components"),
      },
    },
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        // replace "UA-XXXXXXXXX-X" with your own Tracking ID
        trackingId: "UA-XXXXXXXXX-X",
      },
    },
  ],
};
