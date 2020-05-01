module.exports = {
  siteMetadata: {
    title: `Engineering processes applied to our daily life`,
    author: {
      name: `Felipe Schmitt`,
      summary: `Engineering, Leadership, Automation, Photography and Traveling`,
      visit: [`🇦🇩`,`🇦🇹`,`🇧🇪`,`🇧🇬`,`🇭🇷`,`🇨🇿`,`🇩🇰`,`🏴󠁧󠁢󠁥󠁮󠁧󠁿`,`🇪🇪`,`🇫🇮`,`🇫🇷`,`🇩🇪`,`🇭🇺`,`🇮🇹`,`🇱🇻`,`🇱🇹`,`🇱🇺`,`🇲🇨`,`🇳🇴`,`🇵🇱`,`🇵🇹`,`🇷🇴`,`🇷🇺`,`🇷🇸`,`🇸🇰`,`🇪🇸`,`🇸🇪`,`🇨🇭`,`🇳🇱`,`🇻🇦`,`🇹🇷`,`🇧🇳`,`🇰🇭`,`🇨🇳`,`🇭🇰`,`🇮🇳`,`🇮🇱`,`🇯🇵`,`🇯🇴`,`🇱🇦`,`🇲🇴`,`🇲🇾`,`🇲🇲`,`🇵🇸`,`🇸🇬`,`🇿🇦`,`🇹🇼`,`🇹🇭`,`🇻🇳`,`🇦🇬`,`🇨🇦`,`🇨🇷`,`🇨🇺`,`🇩🇴`,`🇬🇵`,`🇬🇹`,`🇲🇶`,`🇲🇽`,`🇳🇮`,`🇵🇦`,`🇰🇳`,`🇻🇨`,`🇺🇸`,`🇦🇷`,`🇧🇴`,`🇧🇷`,`🇨🇱`,`🇨🇴`,`🇵🇾`,`🇵🇪`,`🇺🇾`,`🇦🇺`,`🇿🇦`],
      lived: [`🇧🇷`, `🇵🇹`, `🇩🇪`, `🇬🇧`, `🇨🇦`, `🇩🇰`],
      distance: `768,291 km`,
    },
    description: `Generating value by bringing startup culture, towards large corporations and decrease the product life-cycle.`,
    siteDescription: `A blog about engineering, leadership, venture building and culture.`,
    siteUrl: `https://felipeschmitt.com/`,
    social: [
      {
        name: `twitter`,
        url: `https://twitter.com/schmittfelipe`,
      },
      {
        name: `500px`,
        url: `https://500px.com/fsschmitt`,
      },
      {
        name: `behance`,
        url: `https://www.behance.net/fsschmitt`,
      },
      {
        name: `github`,
        url: `https://github.com/fsschmitt`,
      },
      {
        name: `linkedin`,
        url: `https://www.linkedin.com/in/felipeschmitt/`,
      },
      {
        name: `email`,
        url: `contact@felipeschmitt.com`,
      },
    ],
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-165314019-1`,
      },
    },
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Gatsby Starter Blog`,
        short_name: `GatsbyJS`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `content/assets/gatsby-icon.png`,
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
