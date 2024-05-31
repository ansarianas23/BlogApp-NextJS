import React from 'react'
import styles from "./home.module.css"
import Image from 'next/image'

const HomePage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Creative Thoughts Agency.</h1>
        <p className={styles.description}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur dignissimos est illum repellendus ea magni, perferendis voluptas. Ducimus, quisquam inventore.</p>

        <div className={styles.buttons}>
          <button className={styles.button}>Learn More</button>
          <button className={styles.button}>Contact</button>
        </div>

        <div className={styles.brands}>
          <Image className={styles.brandImage} src="/brands.png" fill/>
        </div>
      </div>

      <div className={styles.imgContainer}>
        <Image className={styles.heroImg} src="/hero.gif" unoptimized fill/>
      </div>
    </div>
  )
}

export default HomePage
