import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import '../../stylesheets/styles.scss'
import Header from '../header'
import Footer from '../footer'
import styles from './styles.module.scss'

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteMetadataQuery {
        site {
          siteMetadata {
            title,
            description,
            keywords
          }
        }
      }
    `}
    render={data => (
      <React.Fragment>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: data.site.siteMetadata.description },
            { name: 'keywords', content: data.site.siteMetadata.keywords }
          ]}
        >
          <html lang='en' />
        </Helmet>
        <Header title={data.site.siteMetadata.title} />
        <div className={styles.container}>
          {children}
        </div>
        <Footer />
      </React.Fragment>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout
