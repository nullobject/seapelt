import React from 'react'
import Link from 'gatsby-link'

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
      <a href={TWITTER_URL}><span className='icon-twitter' /></a>
      <a href={FACEBOOK_URL}><span className='icon-facebook' /></a>
      <a href={SOUNDCLOUD_URL}><span className='icon-soundcloud' /></a>
    </nav>
  </header>
)

export default Header
