module.exports = {
  siteMetadata: {
    title: 'Seapelt',
    description: 'Seapelt is the moniker of Byron Bay down-tempo electronica artist Josh Bassett. His music explores the lines between digital and analog, a space where the human signal blurs with the natural environment.',
    keywords: 'seapelt, electronic music, idm, ambient, electronica'
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
