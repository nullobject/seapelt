import React from 'react'
import Link from 'gatsby-link'

import styles from './styles.module.scss'

const Header = ({title}) => (
  <header className={styles.header}>
    <h1>
      <Link to='/'>{title}</Link>
    </h1>
  </header>
)

export default Header
