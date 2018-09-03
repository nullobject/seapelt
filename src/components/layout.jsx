import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import {StaticQuery, graphql} from 'gatsby'

import './styles.scss'

import Header from '../components/header'
import styles from './layout.module.scss'

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
          ]}
        >
          <html lang="en" />
        </Helmet>
        <Header title={data.site.siteMetadata.title} />
        <div className={styles.container}>
          {children}
        </div>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
