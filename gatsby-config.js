module.exports = {
    siteMetadata: {
      title: "Intro - CS",
    },
    plugins: [
      `gatsby-plugin-image`,
      `gatsby-plugin-sharp`,
      `gatsby-transformer-sharp`,
      {
        resolve: 'gatsby-plugin-manifest',
        options: {
          "icon": "src/assets/images/icon.png"
        }
      }
    ],
  };
  