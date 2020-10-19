const emoji = require(`remark-emoji`)
const slug = require("remark-slug")

module.exports = {
  pathPrefix: `/estandares`,
  siteMetadata: {
    title: `Estándares de experiencia digital`,
    description: `Linieamientos y estándares para la creación de productos digitales del GCBA.`,
    author: `@gcba`,
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `articles`,
        path: `${__dirname}/src/articles/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/logo.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        defaultLayouts: {
          default: require.resolve(`./src/components/layout.tsx`),
        },
        remarkPlugins: [emoji, slug],
        gatsbyRemarkPlugins: [
          {
            resolve: "gatsby-remark-custom-blocks",
            options: {
              blocks: {
                si: {
                  classes: "do",
                  title: "optional",
                },
                no: {
                  classes: "dont",
                  title: "optional",
                },
              },
            },
          },
        ],
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
