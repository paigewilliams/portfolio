module.exports = {
  siteMetadata: {
    title: `P__W.`,
    pageLinks: [
      {
        name:'about',
        link:'/about'
      }, 
      {
        name:'projects',
        link:'/projects'
      },
      {
        name:'resume',
        link:'/resume'
      }, 
      {
        name:'contact',
        link:'/contact'
      }
    ],
    description: `My portfolio built with the Gatsby starter.`,
    author: `@gatsbyjs`,
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['IBM Plex Serif','IBM Plex Sans:100,400',]
        }
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1000,
              linkImagesToOriginal: false,
            }
          }
        ]
      }
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-sharp`,
    {
      resolve:`gatsby-plugin-sharp`,
      options: {
        useMozJpeg: false,
        stripMetadata: true,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#FDCDBF`,
        theme_color: `#FDCDBF`,
        display: `minimal-ui`,
        icon: `src/images/egg.png`,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ],
}
