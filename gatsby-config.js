module.exports = {
  siteMetadata: {
    title: 'Seapelt'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/icon.png'
      }
    }, {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-20723605-8',
        head: false,
        anonymize: true,
        respectDNT: true
      }
    },
    'gatsby-plugin-offline',
    'gatsby-plugin-sass'
  ]
}
