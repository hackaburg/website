module.exports = {
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
