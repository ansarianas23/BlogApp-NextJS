import Image from 'next/image'
import React from 'react'
import styles from './about.module.css'

const AboutPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h2 className={styles.subTitle}>About Agency</h2>
        <h1 className={styles.title}>We create digital ideas that are bigger, bolder, braver and better</h1>
        <p className={styles.description}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga quasi exercitationem, saepe dolorum repellat autem amet incidunt eum labore recusandae culpa, debitis voluptate, in consequatur possimus aliquam harum maxime optio!</p>

        <div className={styles.boxes}>
          <div className={styles.box}>
            <h2>10k+</h2>
            <p>Years of Experience</p>
          </div>

          <div className={styles.box}>
            <h2>234k+</h2>
            <p>People reached</p>
          </div>

          <div className={styles.box}>
            <h2>5k+</h2>
            <p>Services and plugins</p>
          </div>
        </div>
      </div>

      <div className={styles.imgContainer}>
        <Image className={styles.img} src="/about.png" alt='About Image' fill/>
      </div>
    </div>
  )
}

export default AboutPage
