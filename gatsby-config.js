const GOOGLE_MAPS_API_KEY = process.env.GOOGLE_MAPS_API_KEY || "";
const BASE_URL = process.env.BASE_URL || "";

module.exports = {
  pathPrefix: BASE_URL,
  siteMetadata: {
    apiKeys: {
      GOOGLE_MAPS_API_KEY,
    },
  },
  plugins: [
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "fs",
        path: `${__dirname}/src`,
      },
    },
    "gatsby-plugin-typescript",
    "gatsby-plugin-emotion",
    "gatsby-plugin-react-helmet",
  ],
};
