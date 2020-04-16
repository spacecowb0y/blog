const postCssPresetEnv = require(`postcss-preset-env`)
const postCSSNested = require('postcss-nested')
const postCSSUrl = require('postcss-url')
const postCSSImports = require('postcss-import')
const cssnano = require('cssnano')
const postCSSMixins = require('postcss-mixins')

module.exports = {
  // pathPrefix: `/blog`,
  siteMetadata: {
    title: `Diego Peralta`,
    description: `A blog written by Diego Peralta, Founder of Pixel2HTML, who lives and works from Berlin, Germany.`,
    copyrights: '',
    author: `Diego Peralta`,
    siteUrl: `https://blog.diego.earth`,
    logo: {
      src: '',
      alt: '',
    },
    logoText: 'cd ~/diego/blog',
    defaultTheme: 'light',
    postsPerPage: 5,
    showMenuItems: 2,
    menuMoreText: 'more',
    mainMenu: [
      {
        title: 'about',
        path: '/me',
      },
      {
        title: 'continuity',
        path: '/continuity',
      },
      {
        title: 'talks',
        path: '/talks',
      },
      {
        title: 'lab',
        path: '/lab',
      },
    ],
  },
  plugins: [
    `babel-preset-gatsby`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/src/posts`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages`,
      },
    },
    {
      resolve: `gatsby-plugin-postcss`,
      options: {
        postCssPlugins: [
          postCSSUrl(),
          postCSSImports(),
          postCSSMixins(),
          postCSSNested(),
          postCssPresetEnv({
            importFrom: 'src/styles/variables.css',
            stage: 1,
            preserve: false,
          }),
          cssnano({
            preset: 'default',
          }),
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-embed-video',
            options: {
              related: false,
              noIframeBorder: true,
            },
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 800,
              quality: 100,
            },
          },
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              classPrefix: 'language-',
              inlineCodeMarker: null,
              aliases: {},
              showLineNumbers: false,
              noInlineHighlight: false,
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Diego Peralta`,
        short_name: `Diego Peralta`,
        start_url: `/`,
        background_color: `#292a2d`,
        theme_color: `#292a2d`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`,
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: 'gatsby-remark-external-links',
      options: {
        target: '_blank',
        rel: 'noreferrer', // eslint-disable-line unicorn/prevent-abbreviations
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-38044638-1",
      },
    },

  ],
}
