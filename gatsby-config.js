const GOOGLE_MAPS_API_KEY = process.env.GOOGLE_MAPS_API_KEY || "";

module.exports = {
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
