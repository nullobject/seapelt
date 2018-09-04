import React from 'react'
import Link from 'gatsby-link'
import {OutboundLink} from 'gatsby-plugin-google-analytics'

import styles from './styles.module.scss'

const FACEBOOK_URL = 'https://facebook.com/seapeltmusic'
const SOUNDCLOUD_URL = 'https://soundcloud.com/seapelt'
const TWITTER_URL = 'https://twitter.com/seapelt'

const Header = ({title}) => (
  <header className={styles.header}>
    <h2>
      <Link to='/'>{title}</Link>
    </h2>
    <nav className={styles.social}>
      <OutboundLink href={TWITTER_URL}><span className='icon-twitter' /></OutboundLink>
      <OutboundLink href={FACEBOOK_URL}><span className='icon-facebook' /></OutboundLink>
      <OutboundLink href={SOUNDCLOUD_URL}><span className='icon-soundcloud' /></OutboundLink>
    </nav>
  </header>
)

export default Header
