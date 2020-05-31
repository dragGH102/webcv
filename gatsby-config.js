/**
 * Configure your Gatsby site with this file.
 */

module.exports = {
  siteMetadata: {
    title: 'Manusolutions'
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
     // Add typescript stack into webpack
    `gatsby-plugin-typescript`,
    'gatsby-plugin-mdx'
  ],
}
