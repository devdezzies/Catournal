

module.exports = {
  siteMetadata: {
    title: `Software Developer`,
        description: `Hello, Im Abdullah a software developer. Im a writer, podcaster, content creator and Coder`,
    author: `Abdullah | Catournal.site`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-image`,
    `gatsby-plugin-catch-links`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-resolve-src`,
    `gatsby-plugin-remove-trailing-slashes`,
    `gatsby-plugin-emotion`,
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
        resolve: 'gatsby-source-prismic-graphql',
        options: {
            repositoryName: 'schatten', // (REQUIRED, replace with your own)
            accessToken: 'MC5ZRGRUb1JFQUFDQUFPbnRT.Ee-_ve-_vW8l77-977-977-9R--_ve-_ve-_vQbvv70f77-9QhkQEQUmQ--_ve-_ve-_ve-_vQ4UWu-_vWg',
            linkResolver: () => post => `/${post.uid}`,
        }
    },
    {
      resolve: `gatsby-plugin-gitalk`,
      options: {
        config: {
          clientID: 'b97ab9918667c01272c3',
          clientSecret: 'c3226abf1bff0657384bdbcf871873acfb36a274',
          repo: 'Catournal',
          owner: 'devdezzies',
          admin: ['devdezzies']
        }

      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-prismic-starter-prist`,
        short_name: `prist`,
        start_url: `/`,
        background_color: `#6f9bfa`,
        theme_color: `#6f9bfa`,
        display: `minimal-ui`,
        icon: `src/images/oscar-icon.png`, // This path is relative to the root of the site.
      },
    },
    // https://www.gatsbyjs.org/packages/gatsby-plugin-google-analytics/
    {
        resolve: `gatsby-plugin-google-analytics`,
        options: {
            trackingId: "UA-190324186-1",
            head: true,
        },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
