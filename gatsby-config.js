module.exports = {
  siteMetadata: {
    title: `Catalyst Starter Onepage`,
    description: `Speed up your Gatsby development workflow. Designed as an opinionated and high speed starter.`,
    author: `Eric Howey`,
    menuLinks:[
          {
            name:'Home',
            link:'/'
          }
            ],
    anchorLinks:[
      {
        name:'Anchor1',
        link:'#anchor1'
      },
      {
        name:'Anchor2',
        link:'#anchor1'
      },
      {
        name:'Anchor3',
        link:'#anchor1'
      }
        ]
  },
    __experimentalThemes: [
        'gatsby-theme-catalyst-core',
        'gatsby-theme-catalyst-onepage'
    ],
    plugins: [ 
      {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#000000`,
        theme_color: `#000000`,
        display: `minimal-ui`,
        icon: `src/images/logo.png`, // This path is relative to the root of the site.
      },
    }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    ]
}