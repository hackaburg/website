const BASE_URL = "/2022"
//const BASE_URL = process.env.BASE_URL || "";

module.exports = {
  pathPrefix: BASE_URL,
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
