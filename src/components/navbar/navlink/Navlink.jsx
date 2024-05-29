import React from 'react'
import Link from 'next/link'
import styles from './Navlink.moule.css'

const Navlink = ({item}) => {
  return (
    <div className={styles.container}>
      <Link  ink href={item.path}>{item.title}</Link>
    </div>
  )
}

export default Navlink
