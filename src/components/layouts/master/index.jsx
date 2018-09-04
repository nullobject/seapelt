import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import {StaticQuery, graphql} from 'gatsby'

import '../../../stylesheets/styles.scss'
import Social from '../../social'
import styles from './styles.module.scss'

const description = 'Seapelt is the moniker of Byron Bay down-tempo electronica artist Josh Bassett. His music explores the lines between digital and analog, a space where the human signal blurs with the natural environment.'
const keywords = 'seapelt, electronic music, idm, ambient, electronica'

const Layout = ({children}) => (
  <StaticQuery
    query={graphql`
      query MasterQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <React.Fragment>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            {name: 'description', content: description},
            {name: 'keywords', content: keywords}
          ]}
        >
          <html lang='en' />
        </Helmet>
        <Social />
        <div className={styles.container}>
          {children}
        </div>
      </React.Fragment>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout
