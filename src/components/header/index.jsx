import React from 'react'
import Link from 'gatsby-link'

import Social from '../social'
import styles from './styles.module.scss'

const Header = ({title}) => (
  <header className={styles.header}>
    <h2>
      <Link to='/'>{title}</Link>
    </h2>
    <Social />
  </header>
)

export default Header
