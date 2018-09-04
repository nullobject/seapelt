import React from 'react'
import {OutboundLink} from 'gatsby-plugin-google-analytics'

import styles from './styles.module.scss'

const FACEBOOK_URL = 'https://facebook.com/seapeltmusic'
const SOUNDCLOUD_URL = 'https://soundcloud.com/seapelt'
const TWITTER_URL = 'https://twitter.com/seapelt'

const Social = () => (
  <nav className={styles.social}>
    <OutboundLink href={TWITTER_URL}><span className='icon-twitter' /></OutboundLink>
    <OutboundLink href={FACEBOOK_URL}><span className='icon-facebook' /></OutboundLink>
    <OutboundLink href={SOUNDCLOUD_URL}><span className='icon-soundcloud' /></OutboundLink>
  </nav>
)

export default Social
