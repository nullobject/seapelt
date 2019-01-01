import React from 'react'
import { withPrefix } from 'gatsby'

import styles from './styles.module.scss'

const Release = ({ release: { title, year, label, cover, url } }) => {
  return (
    <li>
      <img alt='cover' src={withPrefix(cover)} />
      <div>
        <header>
          <h4>{title}</h4>
          <div className={styles.label}>{label}</div>
          <div className={styles.year}>{year}</div>
        </header>
        <a href={url}>Listen</a>
      </div>
    </li>
  )
}

const Releases = ({ releases }) => {
  const html = releases.map(release => <Release key={release.id} release={release} />)
  return <ul className={styles.releases}>{html}</ul>
}

export default Releases
