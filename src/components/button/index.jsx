import React from 'react'
import {Link} from 'gatsby'

import styles from './styles.module.scss'

const button = ({children, to}) => (
  <Link className={styles.button} to={to}>
    {children}
  </Link>
)

export default button
