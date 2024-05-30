import React from 'react'
import styles from './footer.module.css'

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>BlogSite</div>

      <div className={styles.text}>
        Blog creative thoughts agency &copy; All rights reserved.
      </div>
    </div>
  )
}

export default Footer
