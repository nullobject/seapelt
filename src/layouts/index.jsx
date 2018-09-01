import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import './styles.scss'

import Header from '../components/header'
import styles from './index.module.scss'

const Layout = ({children, data}) => (
  <div className={styles.container}>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        {name: 'description', content: 'Sample'},
        {name: 'keywords', content: 'sample, something'}
      ]}
    />
    <Header title={data.site.siteMetadata.title} />
    <div>
      {children()}
    </div>
  </div>
)

Layout.propTypes = {
  children: PropTypes.func
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
