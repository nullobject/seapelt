import React from 'react'
import {withPrefix} from 'gatsby'

import styles from './styles.module.scss'

const Release = ({release: {title, year, cover, url}}) => {
  return (
    <li>
      <img alt='cover' className={styles.cover} src={withPrefix(cover)} />
      <header>{title}</header>
      <span className={styles.year}>{year}</span>
      <a href={url}>Buy on Bandcamp</a>
    </li>
  )
}

const Releases = ({releases}) => {
  const html = releases.map(release => <Release key={release.id} release={release} />)
  return <ul className={styles.releases}>{html}</ul>
}

export default Releases
