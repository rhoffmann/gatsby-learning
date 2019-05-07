module.exports = {
  siteMetadata: {
    title: 'Pandas Eating Lots'
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    'gatsby-transformer-remark',
    'gatsby-plugin-emotion',
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: 'src/utils/typography',
      }
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: "Pandas Eating Things",
        short_name: "Pandas!",
        start_url: "/",
        background_color: "#bada55",
        theme_color: "#bada55",
        display: "standalone",
        icon: "src/images/icon.png"
      }
    },
    'gatsby-plugin-offline',
    `gatsby-plugin-react-helmet`
  ],
};