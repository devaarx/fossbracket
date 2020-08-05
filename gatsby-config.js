module.exports = {
  siteMetadata: {
    title: `Fossbracket`,
    description: `A blog website all about OSS - Linux, Gadgets & Softwares and Web Technologies - JavaScript, React, CSS, Node, GraphQL and so much more.`,
    about: `A blog website all about OSS - Linux, Gadgets & Softwares and Web Technologies - JavaScript, React, CSS, Node, GraphQL and so much more.`,
    siteUrl: `https://fossbracket.com/`,
    navLinks: [
      {
        name: `Linux`,
        path: `/categories/linux/`
      },
      {
        name: `Guides`,
        path: `/categories/guides/`
      },
      {
        name: `Gadgets & Softwares`,
        path: `/categories/gadgets-softwares/`
      },
      {
        name: `About`,
        path: `/about/`
      }
    ],
    social: {
      facebook: `https://www.facebook.com/fossbracket/`
    }
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/static`,
        name: 'assets'
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/static/media`,
        name: 'media'
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/static/css`,
        name: 'css'
      }
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590
            }
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-autolink-headers`
        ]
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Fossbracket`,
        short_name: `Fossbracket`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#000000`,
        display: `minimal-ui`,
        icon: `static/media/favicon.png`
      }
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-168736545-1'
      }
    }
  ]
};
